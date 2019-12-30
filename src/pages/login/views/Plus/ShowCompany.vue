<template>
    <div>
        <div class="back" @click="$router.back()"></div>
        <p class="showCompanyInfoTitle">公司详细信息</p>
        <div class="showCompanyInfo">
            <p>
                <span class="showCompanyInfoDesc">公司名称:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyName}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司规模:<i></i></span>
                <span class="showCompanyInfoValue">{{companyScale}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司地址:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyAddress}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司注册日期:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyEstablishDate}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司注册号:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyRegisterNumber}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司法人代表:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyLegalPerson}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司类型:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyType}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司营业执照编号:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyBusinessNumber}}</span>
            </p>
            <p>
                <span class="showCompanyInfoDesc">公司注册资金:<i></i></span>
                <span class="showCompanyInfoValue">{{$route.params.companyRegisterCapital}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                companyScale: ''
            }
        },
        mounted() {
            if(this.$route.params.companyScale == 1){
                this.companyScale = '小'
            }
            if(this.$route.params.companyScale == 2){
                this.companyScale = '中'
            }
            if(this.$route.params.companyScale == 3){
                this.companyScale = '大'
            }
        }
    }
</script>

<style>

    .back{
        width: 30px;
        height: 20px;
        background-color: goldenrod;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../images/back.png");
        border-radius: 5px;
        margin-top: 20px;
        margin-left: 20px;
    }

    .back:hover{
        background-color: gold;
        cursor: pointer;
    }

    .back:active{
        background-color: mediumseagreen;
    }

    .showCompanyInfoTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .showCompanyInfo{
        width: 100%;
        position: relative;
        padding-left: 85px;
        box-sizing: border-box;
        margin-top: 30px;
    }

    .showCompanyInfo > p{
        margin-top: 10px;
    }

    .showCompanyInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .showCompanyInfoDesc > i{
        display: inline-block;
        width: 100%;
        height: 0;
        background: red;
    }

    .showCompanyInfoValue{
        width: 170px;
        height: 20px;
        font: 15px "微软雅黑";
        letter-spacing: 2px;
        vertical-align: middle;
        margin-left: 10px;
    }

</style>
