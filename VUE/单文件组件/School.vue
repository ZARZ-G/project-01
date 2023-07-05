<!-- 二级组件 -->
<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>


<style>

</style>


<script>
    import Student from './Student.vue'
    export default {
        name: 'School',
        data() {
            name: '东风二中'
        },
        components: {
            School,
            Student
        }
    }
</script>