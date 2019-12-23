<template>
    <div class="sysNavBar">
        <ul class="sysNavBarWrap">
            <li class="sysNavBarOption" :class="sysNavBarOptionSel" v-for="(sysNavBarOption, index1) in sysNavBarOptions"
                :key="index1" @click.stop="showOrHiddenMethod(index1, true)"
                @mouseenter="showOrHiddenMethod(index1, isClick)">
                {{sysNavBarOption}}
                <ul class="sysNavBarOptionSonWrap" v-if="index === index1">
                    <li class="sysNavBarOptionSon" v-for="(sysNavBarOptionSon, index2) in sysNavBarOptionSons[index1]"
                        :key="index2">
                        {{sysNavBarOptionSon}}
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                sysNavBarOptions: ['文件', '主菜单', '模块导入', '帮助'],
                sysNavBarOptionSons: [
                        ['注销','修改密码','退出','锁屏','设置邮箱参数'],
                        ['显示','隐藏'],
                        ['导入模块'],
                        ['帮助文档','投诉建议', '联系我们']
                ],
                index: '',
                isClick: false,
                sysNavBarOptionSel: ''
            }
        },
        methods: {
            showOrHiddenMethod(index, isClick){
                let lis = Array.from(event.target.parentNode.children)
                lis.forEach((value, index, obj) => {
                    lis[index].className = 'sysNavBarOption'
                })
                 if(isClick){
                     this.index = index
                     this.isClick = true
                     event.target.className = 'sysNavBarOption sysNavBarOptionSel'
                }
            }
        },
        watch: {
            isClick(currVal) {
                if(!currVal){
                    let lis = document.querySelectorAll(".sysNavBarOption")
                    lis.forEach((value, index, obj) => {
                        lis[index].className = 'sysNavBarOption'
                    })
                }
            }
        }
    }
</script>


<style>

    .sysNavBar{
        width: 100%;
        min-width: 400px;
    }

    .sysNavBarWrap{
        width: 100%;
        height: 24px;
        min-width: 300px;
        background: url("./images/sysnavbarbck.png") repeat-x;
        padding-left: 10px;
        box-sizing: border-box;
    }

    .sysNavBarOption{
        float: left;
        font: 12px '微软雅黑';
        padding: 0 10px;
        line-height: 24px;
        text-align: center;
        position: relative;
    }

    .sysNavBarOptionSel{
        background: #3399FF;
        cursor: pointer;
    }

    .sysNavBarOption:hover, .sysNavBarOptionSon:hover{
        background: #3399FF;
        cursor: pointer;
    }

    .sysNavBarOptionSonWrap{
        position: absolute;
        top: 24px;
        left: 0px;
    }

    .sysNavBarOptionSon{
        width: 120px;
        height: 22px;
        background: #E3E3E3;
        font: 12px '微软雅黑';
        text-align: center;
        line-height: 22px;
    }

</style>
