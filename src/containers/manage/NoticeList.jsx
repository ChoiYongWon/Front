import { connect } from "react-redux"
import NoticeList from "../../components/manage/NoticeList";
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        totalNum: state.noticetotalnum_reducer.totalNum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_SELECT: function (payload) {
            dispatch(ACTION.SELECT_CONFIG__ACTION_FUNC(payload))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoticeList)