<template>
    <div class="operateGuide">
        <ul class="wordsWrap">
            <!--<li class="words">生产模块</li>
            <li class="words">生产模块</li>
            <li class="words">生产模块</li>
            <li class="words">生产模块</li>
            <li class="words">生产模块</li>
            <li class="words">生产模块</li>
            <li class="words">生产模块</li>-->
            <li v-for="(item, index) in operateGuide" class="words">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['operateGuide'])
        }
    }
</script>


<style>

    .operateGuide{
        width: 100%;
        height: 20px;
        background: #DADFE3;
        border: 1px solid #898C95;
        border-left: none;
        box-sizing: border-box;
    }

    .wordsWrap{
        height: 100%;
        width: 100%;
    }

    .words{
        font: 12px Aerial;
        height: 100%;
        padding: 0 5px;
        float: left;
        border-right: 1px solid #898C95;
        z-index: 100;
    }

    .wordsSel{
        border-bottom: 1px solid white;
    }

</style>
