<template>
    <div class="box">
        <p>我的名字叫{{name}}</p>
        <p>我的年龄是{{age}}</p>
    </div>
</template>

<style>
    .box {
        background-color: pink;
    }
</style>


<script>
    //创建子组件并且导出去
    export default Vue.extend({
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 20,
            }
        },
        components: {
            Student
        }
    })
</script>