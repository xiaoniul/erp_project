<template>
    <div class="wrap clearfix">
        <div class="infoWrap">
            <div class="companyInfoWrap">
            <p class="companyTitle">请输入要注册的公司信息</p>
            <div class="companyInfo">
                <p>
                    <span class="companyInfoDesc">公司名称<i></i></span><span class="colon">:</span>
                    <input class="companyInfoValue" type="text" placeholder="请输入公司名称"><span class="must">*</span>
                </p>
                <p>
                    <span class="companyInfoDesc">公司规模<i></i></span><span class="colon">:</span>
                    <select class="companyInfoValue companyInfoValueSel">
                        <option>大</option>
                        <option>中</option>
                        <option>小</option>
                    </select>
                    <img :src="question" class="question">
                </p>
                <p>
                    <span class="companyInfoDesc">公司地址<i></i></span><span class="colon">:</span>
                    <input class="companyInfoValue" type="text" placeholder="请输入公司地址">
                </p>
                <div class="block">
                    <span class="companyInfoDesc">公司注册日期<i></i></span><span class="colon">:</span>
                    <el-date-picker v-model="value" type="date" placeholder="请输入日期">
                    </el-date-picker>
                </div>
                <p>
                    <span class="companyInfoDesc">公司注册号<i></i></span><span class="colon">:</span>
                    <input class="companyInfoValue" type="text" placeholder="请输入公司注册号"><span class="must">*</span>
                </p>
                <p>
                    <span class="companyInfoDesc">公司法人代表<i></i></span><span class="colon">:</span>
                    <input class="companyInfoValue" type="text" placeholder="请输入公司法人代表">
                </p>
                <p>
                    <span class="companyInfoDesc">公司类型<i></i></span><span class="colon">:</span>
                    <select class="companyInfoValue companyInfoValueSel">
                        <option>有限责任公司</option>
                        <option>其他类型</option>
                    </select>
                </p>
                <p>
                    <span class="companyInfoDesc">公司营业执照编号<i></i></span><span class="colon">:</span>
                    <input class="companyInfoValue" type="text" placeholder="请输入公司营业执照编号">
                </p>
                <p>
                    <span class="companyInfoDesc">公司注册资金<i></i></span><span class="colon">:</span>
                    <input class="companyInfoValue" type="text" placeholder="请输入公司注册资金">
                </p>
            </div>
        </div>

            <div class="adminInfoWrap">
            <p class="adminTitle">请输入管理员信息</p>
            <div class="adminInfo">
                <p>
                    <span class="adminInfoDesc">管理员账号<i></i></span><span class="colon">:</span>
                    <input class="adminInfoValue" type="text" placeholder="请输入管理员账号"><span class="must">*</span>
                </p>
                <p>
                    <span class="adminInfoDesc">管理员手机号码<i></i></span><span class="colon">:</span>
                    <input class="adminInfoValue" type="text" placeholder="请输入管理员手机号码">
                </p>
                <p>
                    <span class="adminInfoDesc">管理员邮箱<i></i></span><span class="colon">:</span>
                    <input class="adminInfoValue" type="text" placeholder="请输入管理员邮箱">
                </p>
                <div class="btnWrap">
                    <p class="tip">输入信息有误, 请核实后再提交</p>
                    <button class="submitBtn">提交</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                question: require("./images/question.png"),
                value: ''
            }
        },
        computed: {
            ...mapState(['name'])
        }
    }
</script>


<style>

    .clearfix:before, .clearfix:after{
        content: "";
        display: table;
        clear: both;
    }

    .wrap{
        width: 100%;
        height: 100%;
        background: #CDE5F1;
    }

    .infoWrap{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 500px;
        height: 580px;
    }

    .companyInfoWrap{
        width: 500px;
        height: 340px;
        margin: auto;
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
    }

    .companyInfoDesc, .adminInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '楷体';
        vertical-align: middle;
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
        background: dimgray;
        outline: none;
        font: bold 20px 楷体;
        cursor: pointer;
        color: darkred;
        margin-right: 20px;
    }

    .submitBtn:hover{
        background: #107384;
    }

    .submitBtn:active{
        background: #003131;
    }

</style>
