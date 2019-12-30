<template>
    <div>
        <div class="backRoute" @click="$router.back()" v-if="this.$route.params.companyName"></div>
        <p class="updateCompanyTitle">修改公司信息</p>
        <div class="updateCompanyInfo">
            <p>
                <span class="updateCompanyInfoDesc">查询公司<i></i></span><span class="updateColon">:</span>
                <input class="updateCompanyInfoValue" type="text" placeholder="输入要修改的公司" v-model="queryCompanyName" @contextmenu.prevent><span class="updateMust">*</span>
                <button class="queryBtn" @click="getSingleCompanyInfo">查询</button>
            </p>
            <p>
                <span class="updateCompanyInfoDesc">公司名称<i></i></span><span class="updateColon">:</span>
                <input class="updateCompanyInfoValue" type="text" placeholder="请输入公司名称" v-model="updateCompanyName" @contextmenu.prevent><span class="updateMust">*</span>
            </p>
            <!--<ul class="companyInfoName" v-if="showCompanyName.length > 0">
                <li v-for="(showCompany, index) in showCompanyName" :key="index" @click="input(index)">{{showCompany.companyName}}</li>
            </ul>-->
            <p>
                <span class="updateCompanyInfoDesc">公司规模<i></i></span><span class="updateColon">:</span>
                <select class="updateCompanyInfoValue updateCompanyInfoValueSel" v-model="updateCompanyScale">
                    <option value="" disabled selected hidden>请选择</option>
                    <option value="3">大</option>
                    <option value="2">中</option>
                    <option value="1">小</option>
                </select>
                <img :src="question" class="question" @mouseenter="showScaleDesc=true" @mouseleave="showScaleDesc=false">
            </p>
            <p class="updateScaleDesc" v-if="showScaleDesc">
                公司规模: 大规模表示1000人以上,中规模表示500-1000人,小规模表示500人以下
            </p>
            <p>
                <span class="updateCompanyInfoDesc">公司地址<i></i></span><span class="updateColon">:</span>
                <input class="updateCompanyInfoValue" v-model="updateCompanyAddress" type="text" placeholder="请输入公司地址">
            </p>
            <div class="updateBlock">
                <span class="updateCompanyInfoDesc">公司注册日期<i></i></span><span class="updateColon">:</span>
                <el-date-picker v-model="updateCompanyRegisterDate" type="date" ptlaceholder="请输入日期">
                </el-date-picker>
            </div>
            <p>
                <span class="updateCompanyInfoDesc">公司注册号<i></i></span><span class="updateColon">:</span>
                <input class="updateCompanyInfoValue" type="text" v-model="updateCompanyRegisterNumber" placeholder="请输入公司注册号"><span class="updateMust">*</span>
            </p>
            <p>
                <span class="updateCompanyInfoDesc">公司法人代表<i></i></span><span class="updateColon">:</span>
                <input class="updateCompanyInfoValue" v-model="updateCompanyLegalPerson" type="text" placeholder="请输入公司法人代表">
            </p>
            <p>
                <span class="updateCompanyInfoDesc">公司类型<i></i></span><span class="updateColon">:</span>
                <select class="updateCompanyInfoValue updateCompanyInfoValueSel" v-model="updateCompanyType">
                    <option value="" disabled selected hidden>请选择</option>
                    <option>有限责任公司</option>
                    <option>其他类型</option>
                </select>
            </p>
            <p>
                <span class="updateCompanyInfoDesc">公司营业执照编号<i></i></span><span class="updateColon">:</span>
                <input class="updateCompanyInfoValue" v-model="updateCompanyBusinessNumber" type="text" placeholder="请输入公司营业执照编号">
            </p>
            <p>
                <span class="updateCompanyInfoDesc">公司注册资金<i></i></span><span class="updateColon">:</span>
                <input class="updateCompanyInfoValue" @keyup="inputNumber" v-model="updateCompanyRegisterCapital" type="text" placeholder="请输入公司注册资金">
            </p>
        </div>
        <button class="updateRegisterBtn" @click="update">修改</button>
        <p class="updateTip" v-if="showMsg">{{msg}}</p>
    </div>
</template>

<script>
    import Vue from 'vue'
    import common from '../../../../api/common/common'
    import {getSingleCompanyInfo, registerOrUpdateCompanyInfo} from '../../../../api/common/interface'
    export default {
        data() {
            return {
                question: require("../images/question.png"),
                showScaleDesc: false,

                queryCompanyName: this.$route.params.companyName,
                updateCompanyName: this.$route.params.companyName,
                updateCompanyScale: this.$route.params.companyScale,
                updateCompanyAddress: this.$route.params.companyAddress,
                updateCompanyRegisterDate: this.$route.params.companyEstablishDate,
                updateCompanyRegisterNumber: this.$route.params.companyRegisterNumber,
                updateCompanyLegalPerson: this.$route.params.companyLegalPerson,
                updateCompanyType: this.$route.params.companyType,
                updateCompanyBusinessNumber: this.$route.params.companyBusinessNumber,
                updateCompanyRegisterCapital: this.$route.params.companyRegisterCapital,
                uuid: this.$route.params.uuid,

                msg: '',
                showMsg: false
            }
        },
        methods: {

            inputNumber(){
                this.updateCompanyRegisterCapital = this.updateCompanyRegisterCapital.replace(/[^\d|^.]/g, '')
            },

            async getSingleCompanyInfo() {
                if(common.isEmpty(this.queryCompanyName)){
                    this.msg = '请输入要查询的公司名称'
                    this.showMsg = true
                    return
                } else {
                    this.showMsg = false
                    this.msg = ''
                }
                let response = await getSingleCompanyInfo({companyName: this.queryCompanyName})
                if(response.statusCode != common.ok){
                    this.msg = response.msg
                    this.showMsg = true
                } else {
                    this.msg = ''
                    this.showMsg = false

                    this.uuid = response.data.uuid
                    this.updateCompanyName = response.data.companyName
                    if(!common.isEmpty(response.data.companyScale)){
                        this.updateCompanyScale = response.data.companyScale
                    }
                    this.updateCompanyAddress = response.data.companyAddress
                    this.updateCompanyRegisterDate = response.data.companyEstablishDate
                    this.updateCompanyRegisterNumber = response.data.companyRegisterNumber
                    this.updateCompanyLegalPerson = response.data.companyLegalPerson
                    if(!common.isEmpty(response.data.companyType)){
                        this.updateCompanyType = response.data.companyType
                    }
                    this.updateCompanyBusinessNumber = response.data.companyRegisterNumber
                    this.updateCompanyRegisterCapital = response.data.companyRegisterCapital
                }
            },
            async update() {
                if(common.isEmpty(this.uuid)){
                    this.msg = '请先查询公司信息'
                    this.showMsg = true
                    return
                }
                let companyRegisterDate = '';
                if(common.isEmpty(this.updateCompanyName)){
                    this.msg = '请输入公司名'
                    this.showMsg = true
                    return
                }
                if(typeof this.updateCompanyRegisterDate === 'string'){
                    this.updateCompanyRegisterDate = new Date(this.updateCompanyRegisterDate)
                }
                if(!common.isEmpty(this.updateCompanyRegisterDate)) {
                    if (/(19|20)[0-9][0-9]-0?[1-9]|1[0-2]-0?[1-9]|[1-2][0-9]|3[0-1]/.test(this.updateCompanyRegisterDate)) {
                        if(!common.checkDate(this.updateCompanyRegisterDate)) {
                            this.msg = '请输入合法的日期'
                            this.showMsg = true
                            return
                        } else {
                            companyRegisterDate = this.updateCompanyRegisterDate.getFullYear() + '-' +
                                    (this.updateCompanyRegisterDate.getMonth()+1) + '-' +
                                    this.updateCompanyRegisterDate.getDate()
                        }
                    } else {
                        this.msg = '请输入合法的日期'
                        this.showMsg = true
                        return
                    }
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
                    companyName: this.updateCompanyName,
                    companyScale: this.updateCompanyScale,
                    companyAddress: this.updateCompanyAddress,
                    companyEstablishDate: companyRegisterDate,
                    companyLegalPerson: this.updateCompanyLegalPerson,
                    companyType: this.updateCompanyType,
                    companyBusinessNumber: this.updateCompanyBusinessNumber,
                    companyRegisterCapital: this.updateCompanyRegisterCapital,
                    companyRegisterNumber: this.updateCompanyRegisterNumber,
                    regOrUptFlag: 'upt',
                    uuid: this.uuid
                }
                let response = await registerOrUpdateCompanyInfo(companyInfo)
                this.msg = response.msg
                this.showMsg = true
            }
        }
    }
</script>


<style>

    .backRoute{
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

    .backRoute:hover{
      background-color: gold;
      cursor: pointer;
    }

    .backRoute:active{
      background-color: mediumseagreen;
    }

    .updateCompanyTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .queryBtn{
        position: absolute;
        vertical-align: middle;
        left: 365px;
        top: 6px;
        width: 42px;
        height: 27px;
        border: none;
        outline: none;
        border-radius: 2px;
        background: goldenrod;
    }

    .queryBtn:hover{
        cursor: pointer;
        background: gold;
    }

    .queryBtn:active{
        cursor: pointer;
        background: mediumseagreen;
    }

    .updateCompanyInfo{
        width: 100%;
        position: relative;
        padding-left: 85px;
        box-sizing: border-box;
    }

    .updateCompanyInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .updateScaleDesc{
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

    .updateCompanyInfoDesc > i{
        display: inline-block;
        width: 100%;
        height: 0;
        background: red;
    }

    .updateColon{
        display: inline-block;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .updateCompanyInfoValue{
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

    .updateCompanyInfoValueSel{
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

    .updateMust{
        font: 15px '微软雅黑';
        color: red;
        margin-left: 5px;
    }

    .updateRegisterBtn{
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

    .updateRegisterBtn:hover{
        background: gold;
        cursor: pointer;
    }

    .updateRegisterBtn:active{
        background: mediumseagreen;
    }

    .updateTip{
        width: 100%;
        font: 20px '楷体';
        color: red;
        text-align: center;
        margin-top: 10px;
    }

</style>
