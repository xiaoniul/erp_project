<template>
    <div class="searchWrap">
        <p class="searchDesc">请输入删除的公司名称</p>
        <div class="valueWrap clearfix">
            <input class="searchCompanyValue" type="text" placeholder="请输入公司名称" v-model="value"/>
            <ul class="searchValue" v-if="">
                <li class="searchValueOption">你好</li>
                <li class="searchValueOption">阿里巴巴</li>
                <li class="searchValueOption">阿里巴巴</li>
                <li class="searchValueOption">阿里巴巴</li>
                <li class="searchValueOption">阿里巴巴</li>
                <li class="searchValueOption">阿里巴巴阿里巴巴阿里巴巴阿里巴巴阿里巴巴阿里巴巴阿里巴巴</li>
                <li class="searchValueOption">阿里巴巴阿里巴巴阿里巴巴阿里巴巴阿里巴巴阿里巴巴阿里巴巴</li>
            </ul>
        </div>
        <button class="searchBtn">删除</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        watch: {
            value: function(currVal, oldVal){
                if(currVal !== oldVal){
                    console.log("currVal: " + currVal + ", oldVal: " + oldVal)
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
        height: 102px;
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

</style>
