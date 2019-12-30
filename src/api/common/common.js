/**
 * Created by Administrator on 2019/12/27.
 */


export default {

    /*
     * 后台返回的状态码
     * */
    ok: 'OK',
    err: 'ERR',

    isEmpty(obj){
        if(typeof obj == "undefined" || obj == null || obj == ""){
            return true;
        }else{
            return false;
        }
    },

    //检验传入日期是否大于当前日期
    checkDate(date){
        let currDate = new Date()
        let year = currDate.getFullYear()
        let mon = currDate.getMonth() + 1
        let day = currDate.getDate()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDate()
        if(y > year){
            return false
        }
        if(y < year) {
            return true
        } else if(y == year) {
            if(m > mon) {
                return false
            }
            if(m < mon){
                return true
            } else if(m == mon) {
                if(d > day) {
                    return false
                }
                if(d <= day) {
                    return true
                }
            }
        }
    }

}