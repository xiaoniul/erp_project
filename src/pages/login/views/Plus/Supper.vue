<template>
    <div class="wrap">
        <div class="supper">
            <div class="advert">
                <a class="CC text" href="http://www.mibi4.com">小广告: 瓜子、花生、矿泉水</a>
            </div>
            <ul class="operateList">
                <li class="operateItemActive" @click="goto('./registerCompany')">注册公司</li>
                <li class="operateItem" @click="goto('./updateCompany')">修改公司信息</li>
                <li class="operateItem" @click="goto('./registerUser')">注册用户</li>
                <li class="operateItem" @click="goto('./updateUser')">修改用户信息</li>
                <li class="operateItem" @click="goto('./deleteCompany')">公司信息</li>
                <li class="operateItem" @click="goto('./deleteUser')">用户信息</li>
            </ul>
            <router-view class="routerView"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goto(route) {
                Array.from(event.target.parentNode.children).forEach(function (item, index) {
                    item.className = 'operateItem'
                })
                event.target.className = 'operateItemActive'
                this.$router.push(route)
            }
        }
    }
</script>


<style>

    .wrap{
        width: 100%;
        height: 100%;
        background: #CDE5F1;
    }

    .supper{
        width: 600px;
        height: 500px;
        border: 1px solid black;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: burlywood;
    }

    .advert{
        width: 100%;
        height: 30px;
        border-bottom: 1px solid black;
        background: mediumseagreen;
        overflow: hidden;
        position: relative;
    }

    .text{
        font: 15px '微软雅黑';
        color: purple;
        height: 100%;
        display: inline-block;
        position: absolute;
        left: 0px;
        line-height: 30px;
    }

    .text:hover{
        cursor: default;
    }

    .operateList{
        float: left;
        width: 120px;
        height: 469px;
        border-right: 1px solid black;
        box-sizing: border-box;
        background: mediumseagreen;
    }

    .operateItem{
        width: 109px;
        height: 25px;
        border-bottom: 1px solid black;
        font: bold 15px '微软雅黑';
        /*text-align: center;*/
        line-height: 25px;
        color: mintcream;
        letter-spacing: 2px;
        padding: 5px 0;
        padding-left: 10px;
    }

    .operateItemActive{
        width: 109px;
        height: 25px;
        border-bottom: 1px solid black;
        font: bold 15px '微软雅黑';
        /*text-align: center;*/
        line-height: 25px;
        color: mintcream;
        letter-spacing: 2px;
        padding: 5px 0;
        padding-left: 10px;
        background: yellowgreen;
    }

    .operateItem:hover, .operateItemActive:hover{
        cursor: pointer;
        background: blue;
    }

    .routerView{
        float: left;
        width: 480px;
        height: 469px;
        background: yellowgreen;
    }

    @keyframes text {
        0% {
            -webkit-transform: translate3d(600px, 0, 0);
            transform: translate3d(600px, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(-188px, 0, 0);
            transform: translate3d(-188px, 0, 0);
        }
    }
    .advert{
        width: 100%;
        height: 30px;
        border-bottom: 1px solid black;
        background: mediumseagreen;
        overflow: hidden;
        position: relative;
    }

    .advert .text{
        -webkit-animation: 10s text linear infinite normal;
        animation: 10s text linear infinite normal;
        position: relative;
    }

</style>
