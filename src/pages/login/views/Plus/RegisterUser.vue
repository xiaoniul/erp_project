<template>
    <div>
        <p class="registerUserInfoTitle">注册管理员用户</p>
        <div class="registerUserInfo">
            <p>
                <span class="registerUserInfoDesc">公司名称<i></i></span><span class="colon">:</span>
                <!--<input class="adminInfoValue" type="text" v-model="companyName" placeholder="请输入公司名称"><span class="must">*</span>-->
                <select class="registerUserCompany" v-model="registerUserCompany" @change="selCompany">
                    <option value="" disabled selected hidden>请选择</option>
                    <option v-for="(company, index) in registerUserCompanys" :key="index">{{company.companyName}}</option>
                </select>
                <span class="must1">*</span>
            </p>
            <p>
                <span class="registerUserInfoDesc">管理员账号<i></i></span><span class="colon">:</span>
                <input class="registerUserInfoValue" type="text" v-model="username" placeholder="请输入管理员账号"><span class="must">*</span>
            </p>
            <p>
                <span class="registerUserInfoDesc">管理员手机号码<i></i></span><span class="colon">:</span>
                <input class="registerUserInfoValue" type="text" v-model="phoneNumber" placeholder="请输入管理员手机号码">
            </p>
            <p>
                <span class="registerUserInfoDesc">管理员邮箱<i></i></span><span class="colon">:</span>
                <input class="registerUserInfoValue" type="text" v-model="email" placeholder="请输入管理员邮箱">
            </p>
            <p>
                <span class="registerUserInfoDesc">管理员微信<i></i></span><span class="colon">:</span>
                <input class="registerUserInfoValue" type="text" v-model="wechatNumber" placeholder="请输入管理员微信号">
            </p>
        </div>
        <button class="registerBtn" @click="registerUser">注册</button>
        <p class="tip" v-if="showMsg">{{msg}}</p>
    </div>
</template>

<script>
    import common from '../../../../api/common/common'
    import {reqGetCompanyInfo, registerOrUpdateUserInfo} from '../../../../api/common/interface'
    export default {
        data() {
            return {
                registerUserCompany: '',
                username: '',
                phoneNumber: '',
                email: '',
                wechatNumber: '',
                registerUserCompanys: [],

                msg: '',
                showMsg: false,
                companyName: ''
            }
        },
        methods: {
            selCompany() {
                this.companyName = this.registerUserCompany
            },
            async registerUser() {
                if(common.isEmpty(this.username)){
                    this.msg = '用户名不能为空'
                    this.showMsg = true
                    return
                }
                if(!common.isEmpty(this.phoneNumber) && !/^1[3-9]\d{9}$/.test(this.phoneNumber)){
                    this.msg = '手机号不合法,请重新输入'
                    this.showMsg = true
                    return
                }
                if(!common.isEmpty(this.email) && !/^([A-z0-9])(\w|\_)*@[A-z0-9]+\.([A-z]{2,4})$/.test(this.email)){
                    this.msg = '邮箱不合法,请重新输入'
                    this.showMsg = true
                    return
                }
                let userInfo = {
                    companyName: this.companyName,
                    username: this.username,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    wechatNumber: this.wechatNumber,
                    regOrUptFlag: 'reg'
                }
                let response = await registerOrUpdateUserInfo(userInfo)
                this.msg = response.msg
                this.showMsg = true
            }
        },
        async mounted() {
            let allCompany = await reqGetCompanyInfo()
            this.registerUserCompanys = this.registerUserCompanys.concat(allCompany.data)
        }
    }
</script>


<style>

    .registerUserInfoTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .registerUserInfo{
        width: 100%;
        position: relative;
        padding-left: 85px;
        box-sizing: border-box;
    }

    .registerUserInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .registerUserInfoDesc > i{
        display: inline-block;
        width: 100%;
        height: 0;
        background: red;
    }

    .colon{
        display: inline-block;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .registerUserInfoValue{
        width: 170px;
        height: 25px;
        border: 1px solid #646464;
        font: 13px "微软雅黑";
        padding: 1px 4px;
        outline: none;
        border-radius: 3px;
        margin-top: 5px;
    }

    .registerUserCompany{
        width: 179px;
        height: 28px;
        border: 1px solid #646464;
        font: 13px "微软雅黑";
        padding: 1px 1px;
        outline: none;
        border-radius: 3px;
        margin-top: 5px;
    }

    input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #C0C4CC;
    }
    input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #C0C4CC;
    }
    input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #C0C4CC;
    }
    input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #C0C4CC;
    }

    .must{
        font: 15px '微软雅黑';
        color: red;
        margin-left: 5px;
    }

    .must1{
        font: 15px '微软雅黑';
        color: red;
        margin-left: 1px;
    }

    .registerBtn{
        width: 70px;
        height: 28px;
        font: 15px '微软雅黑';
        border: none;
        border-radius: 5px;
        background: goldenrod;
        margin: auto;
        display: block;
        margin-top: 20px;
        letter-spacing: 5px;
        outline: none;
        padding-left: 10px;
        text-align: center;
    }

    .registerBtn:hover{
        background: gold;
    }

    .registerBtn:active{
        background: gray;
    }

    .tip{
        width: 100%;
        font: 20px '楷体';
        color: red;
        text-align: center;
        margin-top: 10px;
    }

</style>
