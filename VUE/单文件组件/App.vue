<!-- 创建父组件 -->
<template>
    <div>
        <!-- 调用子组件 -->
        <School></School>
    </div>
</template>


<script>
    // <!-- 导入子组件 -->
    import School from './School.vue'
    export default {
        name: 'App',
        components: {
            School,
        }
    }

</script>