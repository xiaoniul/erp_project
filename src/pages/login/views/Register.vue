<!--
<template>
    <div>
        <div class="companyInfoWrap">
        <p class="companyTitle">请输入要注册的公司信息</p>
        <div class="companyInfo">
            <p>
                <span class="companyInfoDesc">公司名称<i></i></span><span class="colon">:</span>
                <input class="companyInfoValue" type="text" placeholder="请输入公司名称" v-model="companyName" @contextmenu.prevent><span class="must">*</span>
            </p>
            <ul class="companyInfoName" v-if="showCompanyName.length > 0">
                <li v-for="(showCompany, index) in showCompanyName" :key="index" @click="input(index)">{{showCompany.companyName}}</li>
            </ul>
            <p>
                <span class="companyInfoDesc">公司规模<i></i></span><span class="colon">:</span>
                <select class="companyInfoValue companyInfoValueSel" v-model="companyScale">
                    <option>大</option>
                    <option>中</option>
                    <option>小</option>
                </select>
                <img :src="question" class="question" @mouseenter="showScaleDesc=true" @mouseleave="showScaleDesc=false">
            </p>
            <p class="scaleDesc" v-if="showScaleDesc">
                公司规模: 大规模表示1000人以上,中规模表示500-1000人,小规模表示500人以下
            </p>
            <p>
                <span class="companyInfoDesc">公司地址<i></i></span><span class="colon">:</span>
                <input class="companyInfoValue" v-model="companyAddress" type="text" placeholder="请输入公司地址">
            </p>
            <div class="block">
                <span class="companyInfoDesc">公司注册日期<i></i></span><span class="colon">:</span>
                <el-date-picker v-model="companyRegisterDate" type="date" placeholder="请输入日期">
                </el-date-picker>
            </div>
            <p>
                <span class="companyInfoDesc">公司注册号<i></i></span><span class="colon">:</span>
                <input class="companyInfoValue" type="text" v-model="companyRegisterNumber" placeholder="请输入公司注册号"><span class="must">*</span>
            </p>
            <p>
                <span class="companyInfoDesc">公司法人代表<i></i></span><span class="colon">:</span>
                <input class="companyInfoValue" v-model="companyLegalPerson" type="text" placeholder="请输入公司法人代表">
            </p>
            <p>
                <span class="companyInfoDesc">公司类型<i></i></span><span class="colon">:</span>
                <select class="companyInfoValue companyInfoValueSel" v-model="companyType">
                    <option>有限责任公司</option>
                    <option>其他类型</option>
                </select>
            </p>
            <p>
                <span class="companyInfoDesc">公司营业执照编号<i></i></span><span class="colon">:</span>
                <input class="companyInfoValue" v-model="companyBusinessNumber" type="text" placeholder="请输入公司营业执照编号">
            </p>
            <p>
                <span class="companyInfoDesc">公司注册资金<i></i></span><span class="colon">:</span>
                <input class="companyInfoValue" v-model="companyRegisterCapital" type="text" placeholder="请输入公司注册资金">
            </p>
        </div>
    </div>

        <div class="adminInfoWrap">
        <p class="adminTitle">请输入管理员信息</p>
        <div class="adminInfo">
            <p>
                <span class="adminInfoDesc">管理员账号<i></i></span><span class="colon">:</span>
                <input class="adminInfoValue" type="text" v-model="username" placeholder="请输入管理员账号"><span class="must">*</span>
            </p>
            <p>
                <span class="adminInfoDesc">管理员手机号码<i></i></span><span class="colon">:</span>
                <input class="adminInfoValue" type="text" v-model="phoneNumber" placeholder="请输入管理员手机号码">
            </p>
            <p>
                <span class="adminInfoDesc">管理员邮箱<i></i></span><span class="colon">:</span>
                <input class="adminInfoValue" type="text" v-model="email" placeholder="请输入管理员邮箱">
            </p>
            <div class="btnWrap">
                <p class="tip" v-if="errorInfo != ''">{{errorInfo}}</p>
                <button class="submitBtn" @click="register">提交</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import {reqGetCompanyInfo, submitCompanyAndUserInfo} from '../../../api/common/url'
    import common from '../../../api/common/common'
    import Vue from 'vue'
    export default {
        data() {
            return {
                question: require("./images/question.png"),
                showScaleDesc: false,
                errorInfo: '',
                companyNameArr: [],
                showCompanyName: [],

                companyName: '',            //公司名称
                companyScale: '',
                companyAddress: '',
                companyRegisterDate: '',
                companyLegalPerson: '',
                companyType: '',
                companyBusinessNumber: '',
                companyRegisterCapital: '',
                companyRegisterNumber: '',   //公司注册号

                username: '',
                phoneNumber: '',
                email: ''

            }
        },
        methods: {
            input(index) {
                this.companyRegisterNumber = this.showCompanyName[index].companyRegisterNumber
                this.showCompanyName = 'idle'
                this.companyName = event.target.innerHTML.trim()
            },
            async register() {
                if(this.companyName.trim() === '') {
                    this.errorInfo = '公司名不能为空'
                    return
                }
                if(this.companyRegisterNumber.trim() === ''){
                    this.errorInfo = '公司注册号不能为空'
                    return
                }
                if(!(/[A-z0-9]/.test(this.companyRegisterNumber))){
                    this.errorInfo = '公司注册号只能是字母或数字'
                    return
                }
                if(!(/\w/.test(this.username))){
                    this.errorInfo = '管理员账号只能是字母、数字和下划线'
                    return
                }
                let data = {
                    companyName: this.companyName,            //公司名称
                    companyScale: this.companyScale,
                    companyAddress: this.companyAddress,
                    companyRegisterDate: this.companyRegisterDate,
                    companyLegalPerson: this.companyLegalPerson,
                    companyType: this.companyType,
                    companyBusinessNumber: this.companyBusinessNumber,
                    companyRegisterCapital: this.companyRegisterCapital,
                    companyRegisterNumber: this.companyRegisterNumber,   //公司注册号
                    username: this.username,
                    phoneNumber: this.phoneNumber,
                    email: this.email
                }
                let response = await submitCompanyAndUserInfo(data)
                if(response.statusCode === common.ok) {
                    this.errorInfo = response.msg
                } else {
                    this.errorInfo = response.msg
                }
            }
        },
        mounted() {
            reqGetCompanyInfo()
                    .then((response) => {
                        if(response.statusCode === common.ok){
                            //数组的concat用于将两个数据合并, 此方法不会影响原数组
                            this.companyNameArr = this.companyNameArr.concat(response.data)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    });
        },
        watch: {
            companyName: function(currVal, oldVal) {
                if(this.showCompanyName === 'idle') {
                    this.showCompanyName = []
                    return ;
                }
                this.showCompanyName = []
                this.companyRegisterNumber = ''
                if(currVal !== oldVal){
                    this.companyNameArr.forEach((value, index, obj) => {
                        if(value.companyName.indexOf(currVal) != -1){
                            this.showCompanyName.push(value)
                        }
                    })

                }
                if(currVal == ''){
                    this.showCompanyName = []
                }
            }
        }
    }
</script>


<style>

    .companyInfoWrap{
        width: 500px;
        height: 340px;
        margin: auto;
        margin-top: 10px;
    }

    .adminInfoWrap{
        width: 500px;
        height: 200px;
        margin: auto;
        margin-top: 30px;
    }

    .companyTitle, .adminTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '楷体';
        margin-bottom: 10px;
    }

    .companyInfo, .adminInfo{
        width: 400px;
        margin-left: 50px;
        position: relative;
    }

    .companyInfoName{
        position: absolute;
        border: 1px solid black;
        width: 180px;
        left: 148px;
        top: 33px;
        padding: 0 5px;
        font: 15px '楷体';
        background: #FFF;
        box-sizing: border-box;
        overflow: auto;
        z-index: 1000;
    }

    .companyInfoName::-webkit-scrollbar {
        width: 4px;
    }
    .companyInfoName::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .companyInfoName::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }

    .companyInfoName > li{
        height: 20px;
        cursor: pointer;
    }

    .companyInfoDesc, .adminInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '楷体';
        vertical-align: middle;
    }

    .scaleDesc{
        width: 140px;
        height: 58px;
        border: 1px solid gray;
        border-radius: 5px;
        font: 10px '楷体';
        position: absolute;
        background: burlywood;
        left: 190px;
        top: 45px;
    }

    .companyInfoDesc > i, .adminInfoDesc > i{
        display: inline-block;
        width: 100%;
        height: 0;
        background: red;
    }

    .colon{
        display: inline-block;
        font: 15px '楷体';
        vertical-align: middle;
    }

    .companyInfoValue, .adminInfoValue{
        width: 170px;
        height: 25px;
        border: 1px solid #646464;
        font: 13px "楷体";
        padding: 1px 4px;
        outline: none;
        border-radius: 3px;
        margin-top: 5px;
    }

    .companyInfoValueSel{
        width: 180px;
        height: 28px;
        text-align: center;
    }

    .el-input__inner{
        width: 180px;
        height: 25px;
        border: 1px solid #646464;
        font: 13px "楷体";
        padding: 1px 4px;
        outline: none;
        border-radius: 3px;
        margin-top: 5px;
        color: black;
    }

    .el-date-editor.el-input{
        width: 185px;
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
        font: 15px '楷体';
        color: red;
        margin-left: 5px;
    }

    .btnWrap{
        width: 100%;
        margin-top: 15px;
        text-align: center;
    }

    .tip{
        font: 15px '楷体';
        color: red;
        margin-bottom: 10px;
    }

    .submitBtn{
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 5px;
        background: #107384;
        outline: none;
        font: bold 20px 楷体;
        cursor: pointer;
        color: darkred;
        margin-right: 20px;
    }

    .submitBtn:hover{
        background: dimgray;
    }

    .submitBtn:active{
        background: #003131;
    }

</style>
-->
