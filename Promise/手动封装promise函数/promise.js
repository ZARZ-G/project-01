class Promise {
    constructor(executor) {
        //添加内置属性
        this.PromiseState = 'pending'
        this.PromiseResult = null
        //创建保存回调的数组
        this.callbacks = []
        const self = this
        //self表示当前promise的对象
        //创建自带的函数
        function resolve(data) {
            if (self.PromiseState !== 'pending') return
            self.PromiseState = 'fulfilled'
            self.PromiseResult = data
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onResolved(data)
                })
            })
        }

        function reject(data) {
            if (self.PromiseState !== 'pending') return
            self.PromiseState = 'rejected'
            self.PromiseResult = data
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onReject(data)
                })
            })

        }

        //定义捕获错误的方法
        //使用try catch
        try {
            executor(resolve, reject)
        }
        catch (err) {
            reject(err)
        }
    }

    //添加then方法
    then(onResolved, onReject) {
        const self = this
        //判断回调函数
        if (typeof onReject !== 'function') {
            onReject = reason => {
                throw reason
            }
        }

        if (typeof onResolved !== 'function') {
            onResolved = value => value
        }
        return new Promise((resolve, reject) => {
            //封装重复的函数
            function callback(type) {
                try {
                    const result = type(self.PromiseResult)
                    if (result instanceof Promise) {
                        result.then(value => {
                            resolve(result)
                        }, reason => {
                            reject(reason)
                        })
                    }
                    else {
                        resolve(result)
                    }
                }
                catch (err) {
                    reject(err)
                }

            }
            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved)
                })
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onReject)
                })
            }

            if (this.PromiseState === 'pending') {
                //将回调函数追加给数组
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved)
                    },
                    onReject: function () {
                        callback(onReject)
                    }
                })
            }
        })
    }

    //添加catch方法
    catch(onReject) {
        return this.then(undefined, onReject)
    }

    //添加resolve方法
    static resolve(value) {
        return new Promise((resolve, reject) => {
            //如果value时Promise的对象
            if (value instanceof Promise) {
                //成功的结果
                value.then(value => {
                    resolve(value)
                }, reason => {
                    //失败的原因
                    reject(reason)
                })
            }
            else {
                resolve(value)
            }
        })
    }

    //添加reject方法
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    //添加all方法
    static all(promises) {
        return new Promise((resolve, reject) => {
            //遍历promises 
            let i = 0
            let res = [] //保存结果
            promises.forEach((item, index) => {
                item.then(value => {
                    i++
                    res[index] = value
                    if (i === promises.length) {
                        resolve(res)
                    }

                }, reason => {
                    reject(reason)
                })
            })
        })
    }

    //添加rece方法
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(value => {
                    resolve(value)
                }, reason => {
                    reject(reason)
                })
            }
        })
    }


}

































