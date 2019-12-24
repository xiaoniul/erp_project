<template>
    <div class="appNavBar">
        <div class="workbench">
            <span>我的工作台</span>
        </div>
        <ul class="appNavBarWrap">
            <li class="appNavBarItem" v-for="(appNavBarMenu, index) in appNavBarMenus"
                :key="index">
                <img src="./images/appnavbartip1.png">
                <span :class="appNavBarMenu.state == 'on' ? '' : stateStyle">{{appNavBarMenu.value}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                appNavBarMenus: [
                    {state: 'off', value: '车间看板'},
                    {state: 'on', value: '视频教学中心'},
                    {state: 'on', value: '商品资料'},
                    {state: 'on', value: '产品结构清单(BOM)'},
                    {state: 'on', value: '生产进度查询'},
                    {state: 'on', value: '生产日报表'},
                    {state: 'on', value: '库存查询'},
                    {state: 'on', value: '客户应收'},
                    {state: 'on', value: '供应商应付'},
                    {state: 'on', value: '报警提示'},
                ],
                stateStyle: 'stateStyle'
            }
        }
    }
</script>


<style>

    .appNavBar{
        width: 100%;
        height: 38px;
        background: url("./images/appnavbarbck.png") repeat-x;
        min-width: 980px;
        position: relative;
    }

    .appNavBarWrap{
        width: 100%;
        height: 100%;
        padding-left: 10px;
        min-width: 920px;
        box-sizing: border-box;
    }

    .appNavBarItem{
        float: left;
        font: 12px '微软雅黑';
        text-align: center;
        padding: 0 5px;
        height: 22px;
        margin-top: 8px;
    }

    .appNavBarItem:hover{
        background: #93D5DC;
        cursor: default;
        border: 1px solid #3399FF;
        box-sizing: border-box;
        padding: 0 4px;
    }

    .appNavBarItem:after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 0px;
        vertical-align: middle;
    }
    .appNavBarItem img, .appNavBarItem span{
        vertical-align: middle;
    }

    .stateStyle{
        color: red;
    }

    .workbench{
        float: right;
        width: 100px;
        height: 30px;
        background: #1A81E5;
        text-align: center;
        font: 12px '微软雅黑';
        color: #FFF;
        margin-top: 4px;
        border: 1px solid #FFF;
    }

    .workbench:after{
        content: "";
        display: inline-block;
        width: 0px;
        height: 100%;
        vertical-align: middle;
    }

    .workbench > span{
        vertical-align: middle;
    }
    
</style>
