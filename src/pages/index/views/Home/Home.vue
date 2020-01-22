<template>
    <div class="homeWrap">
        <ul v-for="(twoMenu, index) in menu" class="menuItem clearfix">
            <div class="twoMenu">{{twoMenu.word}}</div>
            <div class="line"></div>
            <li v-for="(threeMenu, index) in twoMenu.children" class="threeMenu">
                <img :src="'/static/images/'+threeMenu.pic" class="threeMenuPic">
                <div class="threeMenuWord">{{threeMenu.word}}</div>
            </li>
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
            ...mapState(['menu'])
        }
    }
</script>


<style>

    .clearfix:after,.clearfix:before{
        content: "";
        display: table;
        clear: both;
    }

    .homeWrap{
        width: 100%;
        height: 100%;
    }

    .menuItem{
        width: 100%;
        height: 100px;
        padding-left: 14px;
        box-sizing: border-box;
    }

    .twoMenu{
        font: 12px Aerial;
        color: #003399;
        margin-bottom: 2px;
        margin-top: 5px;
    }

    .line{
        float: right;
        width: 100%;
        border-bottom: 1px solid #9FB6D8;
        margin-bottom: 8px;
    }

    .threeMenu{
        float: left;
        text-align: center;
        margin-right: 20px;
        height: 85px;
    }

    .threeMenuPic{

    }

    .threeMenuWord{
        font: 12px Aerial;
        color: #000;
        width: 60px;
    }

    .threeMenuWord:hover{
        background: #3399FF;
        color: #FFF;
    }

</style>
