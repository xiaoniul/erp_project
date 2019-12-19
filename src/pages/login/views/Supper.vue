<template>
    <div class="wrap clearfix" @click="hiddenSearchList">

        <div class="infoWrap">
            <div class="option">
                <router-link to="register" class="optionLi" :class="{showHighLight: isHighLight}" @click.prevent.native="highLightShow(true)">注册</router-link>
                <router-link to="delCompany" class="optionLi" :class="{showHighLight: !isHighLight}" @click.prevent.native="highLightShow(false)">删除</router-link>
            </div>

            <router-view ref="hiddenSearchList"></router-view>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                isHighLight: true
            }
        },
        computed: {
            ...mapState(['name'])
        },
        methods: {
            highLightShow(bool) {
                this.isHighLight = bool
            },
            hiddenSearchList() {
                if(this.$refs.hiddenSearchList.showCompanyName){
                    this.$refs.hiddenSearchList.showCompanyName = []
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

    .wrap{
        width: 100%;
        height: 100%;
        background: #CDE5F1;
    }

    .option{
        width: 500px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        margin: auto;
        border-bottom: 1px solid black;
    }

    .optionLi{
        float: left;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        font: bold 20px/25px "楷体";
        cursor: pointer;
        background: #39B5B5;
        color: white;
    }

    .optionLi:hover{
        background: #188484;
    }

    .optionLi:active{
        background: #084A4A;
    }

    .optionLi:first-child{
        border-right: 1px solid black;
    }

    .infoWrap{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 500px;
        height: 615px;
        border: 1px solid black;
    }

    .showHighLight{
        background: #188484;
    }

</style>
