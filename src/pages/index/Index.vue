<template>
    <div class="index" @click="clickDocument">
        <SystemNavBar ref="systemNavBar"></SystemNavBar>
    </div>
</template>

<script>
    import SystemNavBar from '../../components/SystemNavBar/SystemNavBar.vue'
    export default{
        components: {
            SystemNavBar
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
    }

    .index{
        width: 100%;
        height: 100%;
    }

</style>
