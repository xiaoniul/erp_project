<template>
    <div>
        <p class="companyTitle">注册公司</p>
        <div class="companyInfo">
            <p>
                <span class="companyInfoDesc">公司名称<i></i></span><span class="colon">:</span>
                <input class="companyInfoValue" type="text" placeholder="请输入公司名称" v-model="companyName"><span class="must">*</span>
            </p>
            <!--<ul class="companyInfoName" v-if="showCompanyName.length > 0">
                <li v-for="(showCompany, index) in showCompanyName" :key="index" @click="input(index)">{{showCompany.companyName}}</li>
            </ul>-->
            <p>
                <span class="companyInfoDesc">公司规模<i></i></span><span class="colon">:</span>
                <select class="companyInfoValue companyInfoValueSel" v-model="companyScale" >
                    <option value="" disabled selected hidden>请选择</option>
                    <option value="3">大</option>
                    <option value="2">中</option>
                    <option value="1">小</option>
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
                    <option value="" disabled selected hidden>请选择</option>
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
                <input class="companyInfoValue" @keyup="inputNumber" v-model="companyRegisterCapital" type="text" placeholder="请输入公司注册资金">
            </p>
        </div>
        <button class="registerBtn" @click="register">注册</button>
        <p class="tip" v-if="showMsg">{{msg}}</p>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {registerOrUpdateCompanyInfo} from '../../../../api/common/interface'
    import common from '../../../../api/common/common'
    export default {
        data() {
            return {
                question: require("../images/question.png"),
                showScaleDesc: false,

                companyName: '',            //公司名称
                companyScale: '',
                companyAddress: '',
                companyRegisterDate: '',
                companyLegalPerson: '',
                companyType: '',
                companyBusinessNumber: '',
                companyRegisterCapital: '',
                companyRegisterNumber: '',   //公司注册号
                showMsg: false,
                msg: ''
            }
        },
        methods: {

            inputNumber(){
                this.companyRegisterCapital = this.companyRegisterCapital.replace(/[^\d]/g, '')
//                debugger
            },

            async register() {
                let companyRegisterDate = '';
                if(common.isEmpty(this.companyName)){
                    this.msg = '请输入公司名'
                    this.showMsg = true
                    return
                }
                if(!common.isEmpty(this.companyRegisterDate)) {
                    if (/(19|20)[0-9][0-9]-0?[1-9]|1[0-2]-0?[1-9]|[1-2][0-9]|3[0-1]/.test(this.companyRegisterDate)) {
                        if(!common.checkDate(this.companyRegisterDate)) {
                            this.msg = '请输入合法的日期'
                            this.showMsg = true
                            return
                        } else {
                            companyRegisterDate = this.companyRegisterDate.getFullYear() + '-' +
                                    (this.companyRegisterDate.getMonth()+1) + '-' +
                                    this.companyRegisterDate.getDate()
                        }
                    } else {
                        this.msg = '请输入合法的日期'
                        this.showMsg = true
                        return
                    }
                }

                if(common.isEmpty(this.companyRegisterNumber)){
                    this.msg = '请输入公司注册号'
                    this.showMsg = true
                    return
                }

                if(common.isEmpty(this.companyRegisterCapital) || this.companyRegisterCapital == 0){
                    this.companyRegisterCapital = 0.0
                } else {
                    if(/\d/.test(this.companyRegisterCapital)){
                        this.companyRegisterCapital = this.companyRegisterCapital.replace(/^[0]+/, '')
                    } else {
                        this.msg = '注册资金只能为数字'
                        this.showMsg = true
                        return
                    }
                }

                let companyInfo = {
                    companyName: this.companyName,
                    companyScale: this.companyScale,
                    companyAddress: this.companyAddress,
                    companyEstablishDate: companyRegisterDate,
                    companyLegalPerson: this.companyLegalPerson,
                    companyType: this.companyType,
                    companyBusinessNumber: this.companyBusinessNumber,
                    companyRegisterCapital: this.companyRegisterCapital,
                    companyRegisterNumber: this.companyRegisterNumber,
                    regOrUptFlag: 'reg'
                }
                let response = await registerOrUpdateCompanyInfo(companyInfo)
                if(response.statusCode == common.ok) {
                    this.msg = '注册成功'
                    this.showMsg = true
                    return
                } else {
                    this.msg = response.msg
                    this.showMsg = true
                    return
                }
            }
        }
    }
</script>


<style>

    .companyTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .companyInfo{
        width: 100%;
        position: relative;
        padding-left: 85px;
        box-sizing: border-box;
    }

    .companyInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .scaleDesc{
        width: 160px;
        height: 52px;
        border: 1px solid gray;
        border-radius: 5px;
        font: 10px '微软雅黑';
        position: absolute;
        background: burlywood;
        left: 251px;
        top: 48px;
    }

    .companyInfoDesc > i{
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

    .companyInfoValue{
        width: 170px;
        height: 25px;
        border: 1px solid #646464;
        font: 13px "微软雅黑";
        padding: 1px 4px;
        outline: none;
        border-radius: 3px;
        margin-top: 5px;
        letter-spacing: 2px;
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
        font: 13px "微软雅黑";
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
        font: 15px '微软雅黑';
        color: red;
        margin-left: 5px;
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
        cursor: pointer;
    }

    .registerBtn:active{
        background: mediumseagreen;
    }

    .tip{
        width: 100%;
        font: 20px '楷体';
        color: red;
        text-align: center;
        margin-top: 10px;
    }

</style>
