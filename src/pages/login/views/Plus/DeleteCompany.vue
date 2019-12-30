<template>
    <div>

        <p class="deleteCompanyTitle">公司信息</p>

        <table class="deleteCompanyTable">
            <thead>
                <tr>
                    <th>序号</th>
                    <th class="tableCenter">公司名称</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(company, index) in companys" :key="index">
                    <td>{{index}}</td>
                    <td class="tableCenter">{{company.companyName}}</td>
                    <td>
                        <span class="delCompany" @click="deleteCompany(index)"></span><span class="uptCompany" @click="updateCompany(index)"></span>
                    </td>
                    <!--<td><img src="../images/delete.png" @click="deleteCompany(index)" class="delCompany"> &nbsp; &nbsp;
                        <img src="../images/edit.png" @click="updateCompany(index)" class="uptCompany"></td>-->
                </tr>
                <!--<tr>
                    <td>1</td>
                    <td class="tableCenter">字节跳动</td>
                    <td><img src="../images/delete.png"> &nbsp; &nbsp;<img src="../images/edit.png"></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td class="tableCenter">字节跳动</td>
                    <td><img src="../images/delete.png"> &nbsp; &nbsp;<img src="../images/edit.png"></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td class="tableCenter">字节跳动</td>
                    <td><img src="../images/delete.png"> &nbsp; &nbsp;<img src="../images/edit.png"></td>
                </tr>-->
            </tbody>
        </table>

        <div class="deleteCompanyOperateWrap">
            <button class="pagePrev">上一页</button>
            <button class="pageNext">下一页</button>

            <img src="../images/search.png" class="searchCompanyIcon">
            <input class="searchCompany" type="text" placeholder="搜索公司">
        </div>
        <p class="tip">提示信息提示信息提示信息</p>

        <!--<p class="deleteCompanyTitle">删除公司</p>
        <div class="deleteCompanyInfo">
            <p>
                <span class="deleteCompanyInfoDesc">公司名称<i></i></span><span class="colon">:</span>
                <input class="deleteCompanyInfoValue" type="text" v-model="username" placeholder="请输入要删除的公司名称"><span class="must">*</span>
            </p>
        </div>
        <button class="deleteCompanyBtn">删除</button>
        <p class="tip">提示信息提示信息提示信息</p>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                companys: [{companyName: '阿里巴巴'}, {companyName: '阿里巴巴'}, {companyName: '阿里巴巴'}]
            }
        },
        methods: {
            deleteCompany(index) {
                alert('确定要删除吗?')
            },
            updateCompany(index) {
                console.log('upt: ', index)
            }
        }
    }
</script>


<style>

    .deleteCompanyTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .deleteCompanyTable{
        width: 400px;
        margin: 0 auto;
        border: 1px solid black;
    }

    .deleteCompanyTable tr{
        border-bottom: 1px solid black;
    }

    .deleteCompanyTable th{
        width: 100px;
        height: 30px;
        text-align: center;
        font: bold 15px '微软雅黑';
        line-height: 30px;
        letter-spacing: 2px;
    }

    .deleteCompanyTable td{
        width: 100px;
        height: 30px;
        text-align: center;
        font:13px '微软雅黑';
        line-height: 30px;
        letter-spacing: 2px;
    }

    .deleteCompanyTable td:nth-child(2n){
        width: 200px;
    }

    .deleteCompanyTable td:nth-child(3n){
        cursor: pointer;
    }

    .delCompany{
        width: 50%;
        height: 100%;
        display: inline-block;
        background-image: url("../images/delete.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .delCompany:hover{
        background-color: blue;
    }

    .uptCompany{
        width: 50%;
        height: 100%;
        display: inline-block;
        background-image: url("../images/edit.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .uptCompany:hover{
        background-color: blue;
    }

    /*.deleteCompanyTable td:nth-child(3n):active{*/
        /*background: mediumblue;*/
    /*}*/

    .tableCenter{
        border-right: 1px solid black;
        border-left: 1px solid black;
    }

    .pagePrev{
        width: 48px;
        height: 25px;
        background: goldenrod;
        font: 10px '微软雅黑';
        border: none;
        outline: none;
        margin-left: 150px;
        margin-top: 20px;
        border-radius: 8px;
    }

    .pageNext{
        width: 48px;
        height: 25px;
        background: goldenrod;
        font: 10px '微软雅黑';
        border: none;
        outline: none;
        margin-left: 10px;
        margin-top: 20px;
        border-radius: 8px;
    }

    .pageNext:hover, .pagePrev:hover{
        background: gold;
        cursor: pointer;
    }

    .pageNext:active, .pagePrev:active{
        background: mediumseagreen;
    }

    .searchCompany{
        width: 120px;
        height: 25px;
        font: 10px '微软雅黑';
        outline: none;
        border: none;
        border-radius: 8px;
        letter-spacing: 2px;
        padding-left: 25px;
        margin-left: 20px;
    }

    .deleteCompanyOperateWrap{
        width: 100%;
        position: relative;
    }

    .searchCompanyIcon{
        position: absolute;
        left: 291px;
        top: 25px;
    }

    /*.deleteCompanyTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .deleteCompanyInfo{
        width: 100%;
        position: relative;
        padding-left: 85px;
        box-sizing: border-box;
    }

    .deleteCompanyInfoDesc{
        display: inline-block;
        text-align: justify;
        width: 135px;
        height: 20px;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .colon{
        display: inline-block;
        font: 15px '微软雅黑';
        vertical-align: middle;
    }

    .deleteCompanyInfoDesc > i{
        display: inline-block;
        width: 100%;
        height: 0;
        background: red;
    }

    .deleteCompanyInfoValue{
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

    .deleteCompanyBtn{
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

    .deleteCompanyBtn:hover{
        background: gold;
        cursor: pointer;
    }

    .deleteCompanyBtn:active{
        background: mediumseagreen;
    }*/

</style>
