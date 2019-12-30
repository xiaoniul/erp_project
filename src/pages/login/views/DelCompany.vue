<!--
<template>
    <div class="searchWrap">
        <p class="searchDesc">请输入删除的公司名称</p>
        <div class="valueWrap clearfix">
            <input class="searchCompanyValue" type="text" placeholder="请输入公司名称" v-model="value"/>
            <ul class="searchValue" v-if="showCompanyName.length > 0">
                <li class="searchValueOption" v-for="(name, index) in showCompanyName" @click="inputValue">
                    {{name.companyName}}
                </li>
            </ul>
        </div>
        <button class="searchBtn" @click="deleteCompany">删除</button>
        <p class="tip" v-if="tipInfo != ''">{{tipInfo}}</p>
    </div>
</template>

<script>
    import {reqGetCompanyInfo, deleteCompany} from '../../../api/common/interface'
    import common from '../../../api/common/common'
    export default {
        data() {
            return {
                value: '',
                companyName: [],
                showCompanyName: [],
                tipInfo: ''
            }
        },
        methods: {
            inputValue() {
                this.showCompanyName = 'idle'
                this.value = event.target.innerHTML.trim()
            },
            async deleteCompany() {
                let data = {companyName: this.value}
                let response = await deleteCompany(data)
                if(response.statusCode == common.ok){
                    this.showCompanyName = []
                    this.companyName = []
                }
                this.tipInfo = response.msg
            }
        },
        mounted() {
            reqGetCompanyInfo()
                    .then((response) => {
                        if(response.statusCode === common.ok){
                            //数组的concat用于将两个数据合并, 此方法不会影响原数组
                            this.companyName = this.companyName.concat(response.data)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    });
        },
        watch: {
            value: function(currVal, oldVal){
                if(this.showCompanyName.length == 'idle') {
                    this.showCompanyName = []
                    return ;
                }
                this.showCompanyName = []
                if(currVal !== oldVal){
                    this.tipInfo = ''
                    this.companyName.forEach((value, index, obj) => {
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

    .clearfix:before, .clearfix:after{
        content: "";
        display: table;
        clear: both;
    }

    .searchWrap{
        width: 100%;
        height: 200px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .searchDesc{
        font: bold 20px '楷体';
        text-align: center;
        color: black;
    }

    .valueWrap{
        width: 250px;
        margin: auto;
    }

    .searchCompanyValue{
        background-image: url("./images/search.png");
        background-repeat: no-repeat;
        background-position: 5px center;
        padding: 2px 4px;
        padding-left: 25px;
        border: 1px solid #E8E8E8;
        border-radius: 5px;
        outline: none;
        vertical-align: middle;
        height: 30px;
        width: 100%;
        font: 15px '楷体';
        display: block;
        margin: auto;
        margin-top: 40px;
        box-sizing: border-box;
    }

    .searchValue{
        width: 100%;
        border: 1px solid black;
        margin: auto;
        box-sizing: border-box;
        padding: 0px 10px;
        overflow: auto;
        box-sizing: border-box;
        background: #FFFFFF;
        border: none;
    }

    .searchValueOption{
        width: 100%;
        height: 20px;
        font: 15px '楷体';
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        cursor: pointer;
    }

    .searchBtn{
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
        margin: auto;
        display: block;
        margin-top: 20px;
    }

    .searchBtn:hover{
        background: dimgray;
    }

    .searchBtn:active{
        background: #003131;
    }


    .searchValue::-webkit-scrollbar {
        width: 4px;
    }
    .searchValue::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .searchValue::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }

    .tip{
        width: 100%;
        height: 25px;
        font: 15px '楷体';
        line-height: 25px;
        margin: 10px;
        text-align: center;
    }

</style>
-->
