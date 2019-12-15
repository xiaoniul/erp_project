<template>
    <div class="wrap">
        <!--登录页面最外层div-->
        <div class="loginPage">
            <!--登录页面上面的div，主要作用是设置背景颜色-->
            <div class="loginPageAboveBack">

            </div>
            <!--登录页面下面的div，主要作用是设置背景颜色-->
            <div class="loginPageBelowBack">

            </div>
            <!--包含登录输入框、登录按钮、文字、图片的div-->
            <div class="loginContentArea clearfix">
                <div class="loginBackground1 clearfix" :style="loginBackground1">
                    <p class="companyName">新页生产ERP</p>
                    <p class="tag">用户名、密码或公司名称输入有误</p>
                    <div class="loginInfo">
                        <div class="loginInfoOption">
                            <span class="loginInfoDesc">用户名<i></i></span>:
                            <input v-model="username" class="loginInfoValue" type="text" placeholder="请输入用户名" autocomplete="off"/>
                        </div>
                        <div class="loginInfoOption">
                            <span class="loginInfoDesc">密码<i></i></span>:
                            <input v-model="password" class="loginInfoValue" type="password" placeholder="请输入密码" autocomplete="off"/>
                        </div>
                        <div class="loginInfoOption">
                            <span class="loginInfoDesc">公司名称<i></i></span>:
                            <select v-model="company" class="loginInfoValueSelect">
                                <option>请选择</option>
                                <option>深圳市达博威科技有限公司</option>
                                <option>深圳市德科信息科技有限公司</option>
                                <option>深圳市软通动力科技有限公司</option>
                            </select>
                        </div>
                    </div>
                    <div class="loginBtnWrap">
                        <button class="loginBtn" @click="login">登录</button>
                    </div>
                </div>
                <div class="loginBackground2" :style="loginBackground2">
                    <div class="logoAndPro">
                        <img :src="logo" class="logo">
                        <span class="companyPro">新页软件</span>
                    </div>
                    <p class="copyright">版权所有</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueResource from 'vue-resource'
    import {reqLogin} from '../../../api/common/index'

    export default{
        data() {
            return {
                loginBackground1: {
                    backgroundImage: "url(" + require("../../../assets/loginBackground1.png") + ")",
                    backgroundRepeat: "repeat-x"
                },
                loginBackground2: {
                    backgroundImage: "url(" + require("../../../assets/loginBackground2.png") + ")",
                    backgroundRepeat: "repeat-x"
                },
                logo: require("../../../assets/logo.png"),
                username: '',
                password: '',
                company: ''
            }
        },
        mounted() {
            console.log(this.username, this.password, this.company)
        },
        methods: {
            async login() {
                console.log('点击登录了')
                let loginInfo = await reqLogin(null)
                console.log(loginInfo)
            }

        }
    }
</script>


<style>

    .wrap{
        width: 100%;
        height: 100%;
    }

    .clearfix:before, .clearfix:after{
        content: "";
        display: table;
        clear: both;
    }

    .loginPage{
        width: 100%;
        height: 100%;
        min-width: 1000px;
        min-height: 500px;
        background: pink;
    }

    .loginPageAboveBack{
        width: 100%;
        height: 60%;
        min-width: 1000px;
        min-height: 300px;
        background: #CDE5F1;
    }

    .loginPageBelowBack{
        width: 100%;
        height: 40%;
        min-width: 1000px;
        min-height: 200px;
        background: #2D77A5;
    }

    .loginContentArea{
        width: 500px;
        height: 350px;
        position: absolute;
        left: 0;
        right: 0;
        top: 15%;
        bottom: 0;
        margin: auto;
        background: red;
    }

    .loginBackground1{
        width: 100%;
        height: 190px;
        background: #BEDFF0;
    }

    .companyName{
        color: #FBFBFA;
        font: bold 22px "楷体";
        letter-spacing: 2px;
        margin-top: 25px;
        text-align: center;
    }

    .tag{
        color: red;
        font: bold 15px "楷体";
        letter-spacing: 2px;
        margin-top: 2px;
        text-align: center;
    }

    .loginInfo{
        width: 65%;
        height: 130px;
        float: left;
        padding-left: 65px;
        box-sizing: border-box;
        /*padding-top: 18px;*/
    }

    .loginInfoOption{
        margin-top: 8px;
    }

    .loginInfoDesc{
        display: inline-block;
        text-align: justify;
        font: 13px '楷体';
        width: 60px;
        vertical-align: middle;
        height: 20px;
        margin-right: 3px;
        color: #0B5481;
    }

    .loginInfoDesc > i{
        display: inline-block;
        width: 100%;
        height: 0;
        background: red;
    }

    .loginInfoValue{
        width: 157px;
        height: 25px;
        border: 1px solid #646464;
        font: 13px "楷体";
        padding: 1px 4px;
        outline: none;
        border-radius: 3px;
    }

    .loginInfoValueSelect{
        width: 167px;
        height: 25px;
        border: 1px solid #646464;
        font: 13px "楷体";
        padding: 1px 4px;
        line-height: 25px;
        outline: none;
        border-radius: 3px;
    }

    .loginBtnWrap{
        float: left;
    }

    .loginBtn{
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        position: relative;
        top: 40px;
        left: 40px;
        font: bold 20px 楷体;
        color: white;
        /*background: #107384;*/
        background: #40B5E4;
        cursor: pointer;
        letter-spacing: 3px;
        outline: none;
    }

    .loginBtn:hover{
        /*background: #003131;*/
        background: #107384;
    }

    .loginBtn:active{
        background: #003131;
    }

    .loginBackground2{
        width: 100%;
        height: 160px;
        border-top: #3788B3 solid 3px;
        box-sizing: border-box;
        position: relative;
    }

    .logoAndPro{
        position: absolute;
        right: 15px;
        top: 50px;
        height: 35px;
    }

    .logoAndPro:after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 0px;
        vertical-align: middle;
    }

    .logo{
        vertical-align: middle;
    }

    .companyPro{
        vertical-align: middle;
        font: bold 16px "楷体";
    }

    .copyright{
        position: absolute;
        right: 15px;
        top: 100px;
        font: 11px "楷体";
    }
</style>
