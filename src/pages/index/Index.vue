<template>
    <div class="index" @click="clickDocument">
        <SystemNavBar ref="systemNavBar"></SystemNavBar>
        <ApplicationNavBar></ApplicationNavBar>
        <MainContent></MainContent>
    </div>
</template>

<script>
    import SystemNavBar from '../../components/SystemNavBar/SystemNavBar.vue'
    import ApplicationNavBar from '../../components/ApplicationNavBar/ApplicationNavBar.vue'
    import MainContent from '../../components/MainContent/MainContent.vue'
    export default{
        components: {
            SystemNavBar,
            ApplicationNavBar,
            MainContent
        },
        data() {
            return {

            }
        },
        methods: {
            clickDocument(){
                this.$refs.systemNavBar.isClick = false
                this.$refs.systemNavBar.index = ''
            }
        }
    }
</script>

<style>

    body,html{
        width: 100%;
        height: 100%;
        min-width: 1348px;
        min-height: 720px;
    }

    .index{
        width: 100%;
        height: 100%;
        background: #E6EFF5;
    }

</style>
