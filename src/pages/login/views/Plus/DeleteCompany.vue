<template>
    <div class="delCompanyWrap">

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
                    <td>{{cnt*5 + index + 1}}</td>
                    <td class="tableCenter" @click="showCompany(index, company)">{{company.companyName}}</td>
                    <td>
                        <!--<span class="delCompany" @click="deleteCompany(company)"></span><span class="uptCompany" @click="updateCompany(company)"></span>-->
                        <el-button type="text" @click="open(company)"></el-button><span class="uptCompany" @click="updateCompany(company)"></span>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="deleteCompanyOperateWrap">
            <button class="pagePrev" @click="pagePrev">上一页</button>
            <button class="pageNext" @click="pageNext">下一页</button>

            <img src="../images/search.png" class="searchCompanyIcon" @click="search">
            <input class="searchCompany" type="text" placeholder="搜索公司" @keyup.enter="search" v-model="searchCompany">
            <p class="tip" v-if="showMsg">{{msg}}</p>
        </div>
      <router-view></router-view>
    </div>
</template>

<script>
    import common from '../../../../api/common/common'
    import {getCompanysByPages, getSingleCompanyInfo, deleteCompany} from '../../../../api/common/interface'
    export default {
        data() {
            return {
                companys: [],
                pageNumber: 1,
                cnt: 0,
                msg: '',
                showMsg: false,
                searchCompany: '',
                dialogVisible: false
            }
        },
        async mounted() {
            let resp = await getCompanysByPages({pageNumber: this.pageNumber});
            if(resp.statusCode != common.ok) {
                this.msg = resp.msg
                this.showMsg = true
                return
            }
            this.companys = resp.data
        },
        methods: {
            showCompany(index, company){
                this.$router.push({name: 'showCompany', params: company})
            },
            async deleteCompany(company) {
                let resp = await deleteCompany({companyName: company.companyName})
                if(resp.statusCode != common.ok) {
                  this.msg = resp.msg
                  this.showMsg = true
                  return
                }
                this.msg = resp.msg
                this.showMsg = true
                let respPage = await getCompanysByPages({pageNumber: this.pageNumber});
                if(respPage.statusCode != common.ok) {
                  this.msg = respPage.msg
                  this.showMsg = true
                  return
                }
                this.companys = respPage.data
            },
            updateCompany(company) {
                this.$router.push({name: 'updateCompany', params: company})
            },
            async pageNext() {
                this.pageNumber++
                let resp = await getCompanysByPages({pageNumber: this.pageNumber});
                if(resp.statusCode != common.ok) {
                    this.msg = resp.msg
                    this.showMsg = true
                    this.pageNumber = 1
                    this.cnt = 0
                    return
                }
                if(resp.data != null && resp.data.length > 0) {
                    this.companys = resp.data
                    this.cnt++
                }
                if(resp.data.length == 0){
                    this.pageNumber--
                }
            },
            async pagePrev() {
                this.pageNumber--
                this.cnt--
                if(this.pageNumber == 0){
                    this.pageNumber = 1
                    this.cnt = 0
                }
                let resp = await getCompanysByPages({pageNumber: this.pageNumber});
                if(resp.statusCode != common.ok) {
                    this.msg = resp.msg
                    this.showMsg = true
                    this.pageNumber = 1
                    this.cnt = 0
                    return
                }
                this.companys = resp.data
            },
            async search() {
                this.pageNumber = 1
                this.cnt = 0
                if(common.isEmpty(this.searchCompany)){
                    let resp = await getCompanysByPages({pageNumber: 1});
                    if(resp.statusCode != common.ok) {
                      this.msg = resp.msg
                      this.showMsg = true
                      return
                    }
                    this.companys = resp.data
                    return
                }
                let resp = await getSingleCompanyInfo({companyName: this.searchCompany})
                if(resp.statusCode != common.ok) {
                    this.msg = resp.msg
                    this.showMsg = true
                    return
                }
                this.companys = []
                this.companys.push(resp.data)
            },
            open(company) {
                this.$confirm(`确定删除${company.companyName}?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(async () => {
                    let resp = await deleteCompany({companyName: company.companyName})
                    if(resp.statusCode != common.ok) {
                        this.msg = resp.msg
                        this.showMsg = true
                        return
                    }
                    /*this.msg = resp.msg
                    this.showMsg = true*/
                    let respPage = await getCompanysByPages({pageNumber: this.pageNumber});
                    if(respPage.statusCode != common.ok) {
                        this.msg = respPage.msg
                        this.showMsg = true
                        return
                    }
                    this.companys = respPage.data
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });
            }
        }
    }
</script>


<style>

    .delCompanyWrap{
        position: relative;
    }

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

    .deleteCompanyTable td:nth-child(2n):hover{
      cursor: pointer;
      background-color: greenyellow;
    }

    .deleteCompanyTable td:nth-child(3n){
        cursor: pointer;
    }

    .el-button--text{
        width: 50%;
        height: 100%;
        display: inline-block;
        background-image: url("../images/delete.png");
        background-repeat: no-repeat;
        background-position: center;
        padding: 0;
        border: none;
        border-radius: 0;
    }

    .el-button--text:hover{
      background-color: greenyellow;
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
        background-color: greenyellow;
    }

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
        position: absolute;
        top: 265px;
    }

    .searchCompanyIcon{
        position: absolute;
        left: 291px;
        top: 25px;
    }

</style>
