<template>
    <div class="functionNavBar">
        <div>
            <img src="./images/gnmk.png">
            <span>功能模块</span>
        </div>
        <ul>
            <li @click="gotoHome">
                <span>生产模块</span>
            </li>
            <li @click="gotoOperatorAuth">
                <span>客户供应商</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            gotoHome() {
                console.log('gotoHome')
                this.$router.push('/home')
            },
            gotoOperatorAuth() {
                console.log('gotoOperatorAuth')
                this.$router.push('/operatorAuth')
            }
        },
        mounted() {
            console.log('FunctionNavBar: ' + Vue.prototype.GLOBAL.firstMenuList)
        }
    }
</script>


<style>

    .functionNavBar{
        float: left;
        width: 160px;
        height: 550px;
        border-right: 1px solid #C6D6E3;
        border-top: 1px solid #A3AEB0;
        background: red;
        box-sizing: border-box;
    }

</style>