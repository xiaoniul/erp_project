<template>
    <div class="index" @click="clickDocument">
        <SystemNavBar ref="systemNavBar"></SystemNavBar>
        <ApplicationNavBar></ApplicationNavBar>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script>
    import SystemNavBar from '../../components/SystemNavBar/SystemNavBar.vue'
    import ApplicationNavBar from '../../components/ApplicationNavBar/ApplicationNavBar.vue'
    import MainContent from '../../components/MainContent/MainContent.vue'
    import Footer from '../../components/Footer/Footer.vue'
    export default{
        components: {
            SystemNavBar,
            ApplicationNavBar,
            MainContent,
            Footer
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
        min-width: 1030px;
        min-height: 654px;
    }

    .index{
        width: 100%;
        height: 100%;
        background: #E6EFF5;
    }

</style>
