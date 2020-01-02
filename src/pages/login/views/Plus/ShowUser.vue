<template>
  <div>
      <div class="back" @click="$router.back()"></div>
      <p class="showUserInfoTitle">管理员详细信息</p>
      <div class="showUserInfo">
          <p>
              <span class="showUserInfoDesc">管理员账户:<i></i></span>
              <span class="showUserInfoValue">{{$route.params.username}}</span>
          </p>
          <p>
              <span class="showUserInfoDesc">管理员手机号码:<i></i></span>
              <span class="showUserInfoValue">{{$route.params.phoneNumber}}</span>
          </p>
          <p>
              <span class="showUserInfoDesc">管理员邮箱:<i></i></span>
              <span class="showUserInfoValue">{{$route.params.email}}</span>
          </p>
          <p>
              <span class="showUserInfoDesc">管理员微信号:<i></i></span>
              <span class="showUserInfoValue">{{$route.params.wechatNumber}}</span>
          </p>
          <p>
              <span class="showUserInfoDesc">管理员所在公司:<i></i></span>
              <span class="showUserInfoValue">{{$route.params.companyName}}</span>
          </p>
      </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {

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

  .showUserInfoTitle{
    width: 100%;
    text-align: center;
    font: bold 20px '微软雅黑';
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .showUserInfo{
    width: 100%;
    position: relative;
    padding-left: 85px;
    box-sizing: border-box;
    margin-top: 30px;
  }

  .showUserInfo > p{
    margin-top: 10px;
  }

  .showUserInfoDesc{
    display: inline-block;
    text-align: justify;
    width: 135px;
    height: 20px;
    font: 15px '微软雅黑';
    vertical-align: middle;
  }

  .showUserInfoDesc > i{
    display: inline-block;
    width: 100%;
    height: 0;
    background: red;
  }

  .showUserInfoValue{
    width: 170px;
    height: 20px;
    font: 15px "微软雅黑";
    letter-spacing: 2px;
    vertical-align: middle;
    margin-left: 10px;
  }

</style>
