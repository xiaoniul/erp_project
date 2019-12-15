<template>
    <div>
        Supper
        {{name}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        date() {

        },
        computed: {
            ...mapState(['name'])
        }
    }
</script>


<style>

</style>
