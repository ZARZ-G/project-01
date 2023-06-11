const p = new Promise((resolve, reject) => {
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    const xhr = new XMLHttpRequest()
    xhr.open('get', 'http://127.0.0.1')
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            }
            else { reject(xhr.status) }
        }
    }
})



p.then(value => console.log(value), reason => console.log(reason))