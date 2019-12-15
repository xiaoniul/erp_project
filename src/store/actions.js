/**
 * Created by Administrator on 2019/12/15.
 */


export default {
    setUserName({commit, state}, username) {
        // commit('setUserName', {username})
        state.name = username
    }
}