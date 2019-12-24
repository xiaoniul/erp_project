<template>
    <div class="operate">
        <OperateGuide></OperateGuide>
        <OperateOption></OperateOption>
    </div>
</template>

<script>
    import OperateGuide from '../OperateGuide/OperateGuide.vue'
    import OperateOption from '../OperateOption/OperateOption.vue'
    export default {
        components: {
            OperateGuide,
            OperateOption
        }
    }
</script>


<style>

    .operate{
        float: left;
        width: 1184px;
        height: 550px;
        margin-left: 4px;
    }

</style>
