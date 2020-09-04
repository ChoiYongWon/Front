import { connect } from "react-redux"
import SideNav from "../components/SideNav"
import ACTION from "../store/actions/action"

const mapStateToProps = (state) => {
    return {
        username : state.user_reducer.username,
        logined : state.login_reducer.logined
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LOGOUT : function(payload){
            window.Kakao.Auth.logout(function() {
                dispatch(ACTION.LOGOUT_ACTION_FUNC(payload))
                dispatch({type:ACTION.DELETE_USER})
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)