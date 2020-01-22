<template>
    <div class="functionNavBar">
        <div class="gnmk">
            <img src="./images/gnmk.png">
            <span>功能模块</span>
        </div>
        <ul class="functionNavBarMenu">
            <li @click="gotoHome('生产模块')">
                <img src="./images/scmk1.png">
                <span>生产模块</span>
            </li>
            <li @click="gotoHome('客户供应商')">
                <img src="./images/khgys.png">
                <span>客户供应商</span>
            </li>
            <li @click="gotoHome('进销存管理')">
                <img src="./images/jxcgl.png">
                <span>进销存管理</span>
            </li>
            <li @click="gotoHome('生产模块')">
                <img src="./images/rlzy.png">
                <span>人力资源</span>
            </li>
            <li @click="gotoHome('财务管理')">
                <img src="./images/cwgl.png">
                <span>财务管理</span>
            </li>
            <li @click="gotoHome('会计凭证')">
                <img src="./images/kjpz.png">
                <span>会计凭证</span>
            </li>
            <li @click="gotoHome('报表中心')">
                <img src="./images/bbzx.png">
                <span>报表中心</span>
            </li>
            <li @click="gotoHome('系统办公')">
                <img src="./images/xtbg.png">
                <span>系统办公</span>
            </li>
            <li @click="gotoHome('设备管理')">
                <img src="./images/sbgl.png">
                <span>设备管理</span>
            </li>
            <li @click="gotoHome('系统维护')">
                <img src="./images/xtwh.png">
                <span>系统维护</span>
            </li>
        </ul>
        <div class="wdxx">
            <img src="./images/zxwdxx.png">
            <span>最新未读消息(0)</span>
        </div>
        <div class="msgOption">
            <span>消息中心</span><span>更改状态</span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapState, mapActions} from 'vuex'
    export default {
        data() {
            return {

            }
        },
        methods: {
            gotoHome(item) {
                console.log('gotoHome')
                this.$store.dispatch('addOperateGuide', item)
                //重复点击同一个路由会报错
//                this.$router.push('/home').catch(err => {
//                    console.log('error: ' + err)
//                })
            }
        },
        mounted() {
//            console.log('FunctionNavBar: ' + Vue.prototype.GLOBAL.firstMenuList)
        }
    }
</script>


<style>

    .functionNavBar{
        position: relative;
        float: left;
        width: 160px;
        height: 100%;
        border-right: 1px solid #A3AEB0;
        border-top: 1px solid #A3AEB0;
        box-sizing: border-box;
    }

    .gnmk{
        width: 100%;
        height: 23px;
        border-bottom: 1px solid #A3AEB0;
        line-height: 23px;
    }

    .gnmk:after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }

    .gnmk span{
        font: 12px Aerial;
        letter-spacing: 2px;
        vertical-align: middle;
    }

    .functionNavBarMenu li{
        width: 100%;
        height: 40px;
        cursor: pointer;
    }

    .functionNavBarMenu li:after{
        content: "";
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
    }

    .functionNavBarMenu li:hover{
        background: #97B0CF;
    }

    .functionNavBarMenu li img, .gnmk img, .wdxx img{
        margin-left: 15%;
        vertical-align: middle;
    }

    .functionNavBarMenu li span{
        font: 15px Aerial;
        letter-spacing: 2px;
        vertical-align: middle;
    }

    .wdxx{
        position: absolute;
        width: 100%;
        height: 23px;
        border-bottom: 1px solid #A3AEB0;
        border-top: 1px solid #A3AEB0;
        line-height: 23px;
        bottom: 90px;
    }

    .wdxx:after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }

    .wdxx span{
        font: 12px Aerial;
        letter-spacing: 2px;
        vertical-align: middle;
    }

    .msgOption{
        position: absolute;
        width: 80%;
        height: 23px;
        padding: 0 10%;
        /*margin-top: 60px;*/
        bottom: 0;
    }

    .msgOption span{
        width: 50%;
        height: 23px;
        display: inline-block;
        font: 12px Aerial;
        box-sizing: border-box;
        text-align: center;
        line-height: 23px;
    }

    .msgOption span:hover{
        background: #93D5DC;
        border: 1px solid #3399FF;
        height: 21px;
        line-height: 21px;
        cursor: pointer;
    }

</style>