<template>
    <div>
      <div class="backRouteUser" @click="$router.back()" v-if="this.$route.params.username"></div>
        <p class="updateAdminTitle">修改管理员信息</p>
        <div class="updateAdminInfo">
            <p>
                <span class="updateAdminInfoDesc">管理员账号<i></i></span><span class="colon">:</span>
                <input class="updateAdminInfoValue" type="text" v-model="usernameNew" placeholder="请输入管理员账号"><span class="must">*</span>
            </p>
            <p>
                <span class="updateAdminInfoDesc">管理员手机号码<i></i></span><span class="colon">:</span>
                <input class="updateAdminInfoValue" type="text" v-model="phoneNumber" placeholder="请输入管理员手机号码">
            </p>
            <p>
                <span class="updateAdminInfoDesc">管理员邮箱<i></i></span><span class="colon">:</span>
                <input class="updateAdminInfoValue" type="text" v-model="email" placeholder="请输入管理员邮箱">
            </p>
            <p>
                <span class="updateAdminInfoDesc">管理员微信<i></i></span><span class="colon">:</span>
                <input class="updateAdminInfoValue" type="text" v-model="wechatNumber" placeholder="请输入管理员微信号">
            </p>
        </div>
        <button class="updateUserBtn" @click="updateUser">修改</button>
        <p class="tip" v-if="showMsg">{{msg}}</p>
    </div>
</template>

<script>
    import common from '../../../../api/common/common'
    import {getSingleUserInfo, registerOrUpdateUserInfo} from '../../../../api/common/interface'
    export default {
        data() {
            return {

                updateUserCompany: this.$route.params.companyName,

                usernameOld: '',
                phoneNumber: this.$route.params.phoneNumber,
                email: this.$route.params.email,
                wechatNumber: this.$route.params.wechatNumber,
                uuid: this.$route.params.userUUID,

                usernameNew: this.$route.params.username,

                msg: '',
                showMsg: ''
            }
        },
        methods: {
            async queryUpdateUser() {
                if(common.isEmpty(this.updateUserCompany)){
                    this.msg = '请输入公司名称'
                    this.showMsg = true
                    return
                }
                if(common.isEmpty(this.usernameOld)){
                    this.msg = '请输入用户名'
                    this.showMsg = true
                    return
                }
                let userInfo = {companyName: this.updateUserCompany, username: this.usernameOld}
                let response = await getSingleUserInfo(userInfo)
                if(response.statusCode != common.ok){
                    this.msg = response.msg
                    this.showMsg = true
                    return
                }

                this.usernameNew = response.data.username
                this.email = response.data.email
                this.phoneNumber = response.data.phoneNumber
                this.wechatNumber = response.data.wechatNumber
                this.uuid = response.data.uuid

            },
            async updateUser() {
                if(common.isEmpty(this.uuid)){
                    this.msg = '请先查询用户信息'
                    this.showMsg = true
                    return
                }
                if(common.isEmpty(this.usernameNew)){
                    this.msg = '用户名不能为空'
                    this.showMsg = true
                    return
                }
                let userInfo = {
                    companyName: this.updateUserCompany,
                    username: this.usernameNew,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    wechatNumber: this.wechatNumber,
                    uuid: this.uuid,
                    regOrUptFlag: 'upt'
                }
                let response = await registerOrUpdateUserInfo(userInfo)
                this.msg = response.msg
                this.showMsg = true
            }
        }
    }
</script>


<style>

    .backRouteUser{
      float: left;
      width: 30px;
      height: 20px;
      background-color: goldenrod;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("../images/back.png");
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 20px;
    }

    .updateAdminTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .updateAdminInfo{
        width: 100%;
        position: relative;
        padding-left: 85px;
        box-sizing: border-box;
    }

    .updateAdminInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .updateAdminInfoDesc > i{
        display: inline-block;
        width: 100%;
        height: 0;
        background: red;
    }

    .queryUserBtn{
        position: absolute;
        vertical-align: middle;
        left: 366px;
        top: 40px;
        width: 42px;
        height: 27px;
        border: none;
        outline: none;
        border-radius: 3px;
        background: goldenrod;
    }

    .queryUserBtn:hover{
        cursor: pointer;
        background: gold;
    }

    .queryUserBtn:active{
        cursor: pointer;
        background: mediumseagreen;
    }

    .colon{
        display: inline-block;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .updateAdminInfoValue{
        width: 170px;
        height: 25px;
        border: 1px solid #646464;
        font: 13px "微软雅黑";
        padding: 1px 4px;
        outline: none;
        border-radius: 3px;
        margin-top: 5px;
    }

    .must{
        font: 15px '微软雅黑';
        color: red;
        margin-left: 5px;
    }

    .updateUserBtn{
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

    .updateUserBtn:hover{
        background: gold;
    }

    .updateUserBtn:active{
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
