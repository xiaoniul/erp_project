<template>
    <div>

        <p class="deleteUserTitle">用户信息</p>

        <p class="deleteUserSearch">
            <span>请输入公司名称: &nbsp</span>
            <input type="text" placeholder="请输入公司名称">
            <button>查询用户</button>
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
            <tr>
                <td>1</td>
                <td class="tableCenter">字节跳动</td>
                <td><img src="../images/delete.png"></td>
            </tr>
            <tr>
                <td>1</td>
                <td class="tableCenter">字节跳动</td>
                <td><img src="../images/delete.png"></td>
            </tr>
            <tr>
                <td>1</td>
                <td class="tableCenter">字节跳动</td>
                <td><img src="../images/delete.png"></td>
            </tr>
            </tbody>
        </table>

        <div class="deleteUserOperateWrap">
            <button class="pagePrev">上一页</button>
            <button class="pageNext">下一页</button>

            <img src="../images/search.png" class="searchUserIcon">
            <input class="searchUser" type="text" placeholder="搜索用户">
        </div>
        <p class="tip">提示信息提示信息提示信息</p>
    </div>
</template>

<script>
    export default {}
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
    }

    .deleteUserSearch > span{
        font: 15px '微软雅黑';
        letter-spacing: 1px;
        margin-left: 30px;
    }

    .deleteUserSearch > input{
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

</style>
