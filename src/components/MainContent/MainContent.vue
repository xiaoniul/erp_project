<template>
    <div class="mainContent">
        <FunctionNavBar></FunctionNavBar>
        <Operate></Operate>
    </div>
</template>

<script>
    import FunctionNavBar from '../FunctionNavBar/FunctionNavBar.vue'
    import Operate from  '../Operate/Operate.vue'
    export default {
        components: {
            FunctionNavBar,
            Operate
        }
    }
</script>


<style>

    .mainContent{
        width: 100%;
        height: calc(100% - 84px);
        min-height: 570px;
    }

</style>
