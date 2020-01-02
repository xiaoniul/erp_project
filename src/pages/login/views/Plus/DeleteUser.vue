<template>
    <div>

        <p class="deleteUserTitle">用户信息</p>

        <p class="deleteUserSearch">
            <span>请输入公司名称: &nbsp</span>
            <!--<input type="text" placeholder="请输入公司名称" v-model="companyName" @keyup.enter="queryUsers">-->
            <select v-model="companyName" @change="queryUsers">
                <option v-for="(company, index) in companys">{{company.companyName}}</option>
            </select>
            <button @click="queryUsers">查询用户</button>
        </p>
        <table class="deleteUserTable">
            <thead>
            <tr>
                <th>序号</th>
                <th class="tableCenter">管理员账号</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                  <td>{{cnt*5 + index + 1}}</td>
                  <td class="tableCenter" @click="showUser(index, user)">{{user.username}}</td>
                  <td>
                      <!--<span class="delCompany" @click="deleteCompany(company)"></span><span class="uptCompany" @click="updateCompany(company)"></span>-->
                      <el-button type="text" @click="open(user)"></el-button><span class="uptUser" @click="updateUser(user)"></span>
                  </td>
              </tr>
            </tbody>
        </table>

        <div class="deleteUserOperateWrap">
            <button class="pagePrev" @click="pagePrev">上一页</button>
            <button class="pageNext" @click="pageNext">下一页</button>

            <img src="../images/search.png" class="searchUserIcon" @click="searchUser">
            <input class="searchUser" type="text" placeholder="搜索用户" v-model="searchUserName" @keyup.enter="searchUser">
            <p class="tip" v-if="showMsg">{{msg}}</p>
        </div>
    </div>
</template>

<script>
    import common from '../../../../api/common/common'
    import {reqGetCompanyInfo, getUserInfosByPages, deleteUserInfo, getSingleUserInfo} from '../../../../api/common/interface'
    export default {
        data() {
            return {
                msg: '',
                showMsg: false,
                companys: [],
                companyName: '',
                users: [],
                cnt: 0,
                searchUserName: '',
                number: 1,
                flag: true
            }
        },
        async mounted() {
            let resp = await reqGetCompanyInfo()
            if(resp.statusCode != common.ok){
                this.msg = resp.msg
                this.showMsg = true
                return
            }
            this.companys = resp.data
        },
        methods: {
            async queryUsers(bool) {
                if(!bool) {
                  if (common.isEmpty(this.companyName)) {
                    this.msg = '请输入公司名'
                    this.showMsg = true
                    return
                  }
                }
                let data = {
                    pageNumber: 1,
                    pageSize: 5,
                    companyName: this.companyName
                }
                let resp = await getUserInfosByPages(data)
                this.users = resp.data
            },
            async pageNext() {
                if(this.flag) {
                    if (common.isEmpty(this.companyName)) {
                        return
                    }
                    this.number++
                    let data = {
                        pageNumber: this.number,
                        pageSize: 5,
                        companyName: this.companyName
                    }
                    let resp = await getUserInfosByPages(data)
                    if (resp.data.length == 0) {
                        this.number--
                        return
                    }
                    this.cnt++
                    this.users = resp.data
                }
            },
            async pagePrev() {
                if(this.flag) {
                  if (common.isEmpty(this.companyName)) {
                    return
                  }
                  if (this.number == 1) {
                    return
                  }
                  this.number--
                  this.cnt--
                  let data = {
                    pageNumber: this.number,
                    pageSize: 5,
                    companyName: this.companyName
                  }
                  let resp = await getUserInfosByPages(data)
                  this.users = resp.data
                }
            },
            async searchUser() {
                this.flag = false
                if(common.isEmpty(this.companyName)) {
                    this.msg = '请先选择公司'
                    this.showMsg = true
                    return
                }
                if(common.isEmpty(this.searchUserName)){
                    let data = {
                      pageNumber: 1,
                      pageSize: 5,
                      companyName: this.companyName
                    }
                    let resp = await getUserInfosByPages(data)
                    this.users = resp.data
                    this.flag = true
                    return
                }
                let u = await getSingleUserInfo({companyName: this.companyName, username: this.searchUserName})
                this.users = []
                this.users.push(u.data)
            },
            showUser(index, user) {
                user['companyName'] = this.companyName
                this.$router.push({name: 'showUser', params: user})
            },
            updateUser(user) {
                if(common.isEmpty(user.userUUID)){
                    user.userUUID = user.uuid
                    user.companyUUID = user.companyAccountId
                    user.updateUserCompany = this.companyName
                }
                this.$router.push({name: 'updateUser', params: user})
            },
            open(user) {
                this.$confirm(`确定删除${user.username}?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(async () => {
                    let resp = await deleteUserInfo({companyName: this.companyName, username: user.username})
                    if(resp.statusCode != common.ok) {
                        this.msg = resp.msg
                        this.showMsg = true
                        return
                    }
                    let data = {
                        pageNumber: 1,
                        pageSize: 5,
                        companyName: this.companyName
                    }
                    let respPage = await getUserInfosByPages(data);
                    if(respPage.statusCode != common.ok) {
                        this.msg = respPage.msg
                        this.showMsg = true
                        return
                    }
                    this.users = respPage.data
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

    .deleteUserTitle{
        width: 100%;
        text-align: center;
        font: bold 20px '微软雅黑';
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .deleteUserSearch{
        width: 100%;
        text-align: center;
    }

    .deleteUserSearch > span{
        font: 15px '微软雅黑';
        letter-spacing: 1px;
        margin-left: 30px;
    }

    .deleteUserSearch > select{
        width: 150px;
        height: 23px;
        font: 13px '微软雅黑';
        padding: 0px 5px;
        outline: none;
        border: none;
        border-radius: 8px;
    }

    .deleteUserSearch > button{
        width: 80px;
        height: 25px;
        font: 15px '微软雅黑';
        border: none;
        border-radius: 8px;
        background: goldenrod;
        outline: none;
        letter-spacing: 1px;
    }

    .deleteUserSearch > button:hover{
        background: gold;
        cursor: pointer;
    }

    .deleteUserSearch > button:active{
        background: mediumseagreen;
    }

    .deleteUserTable{
        width: 400px;
        margin: 0 auto;
        border: 1px solid black;
        margin-top: 20px;
    }

    .deleteUserTable tr{
        border-bottom: 1px solid black;
    }

    .deleteUserTable th{
        width: 100px;
        height: 30px;
        text-align: center;
        font: bold 15px '微软雅黑';
        line-height: 30px;
        letter-spacing: 2px;
    }

    .deleteUserTable td{
        width: 100px;
        height: 30px;
        text-align: center;
        font:13px '微软雅黑';
        line-height: 30px;
        letter-spacing: 2px;
    }

    .deleteUserTable td:nth-child(2n){
        width: 200px;
    }

    .deleteUserTable td:nth-child(2n):hover{
        cursor: pointer;
        background-color: greenyellow;
    }

    .deleteCompanyTable td:nth-child(3n){
        cursor: pointer;
    }

    .deleteUserTable td:nth-child(3n):active{
        background: mediumblue;
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

    .searchUser{
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

    .deleteUserOperateWrap{
        width: 100%;
        position: relative;
    }

    .searchUserIcon{
        position: absolute;
        left: 291px;
        top: 25px;
    }

    .uptUser{
        width: 50%;
        height: 100%;
        display: inline-block;
        background-image: url("../images/edit.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .uptUser:hover{
        background-color: greenyellow;
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

</style>
