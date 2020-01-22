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
        width: calc(100% - 164px);
        min-width: 866px;
        height: 100%;
        margin-left: 4px;
        border-left: 1px solid #898C95;
        box-sizing: border-box;
    }

</style>
