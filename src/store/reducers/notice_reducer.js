import ACTION from "../actions/notice_action"

export default (state , action)=>{
    if(state===undefined) { return {region : "수성구" }}
    switch(action.type){
        
        case ACTION.SET_CONFIG:
            return {
                ...state,  ...action.notice
            }
        case ACTION.DELETE_CONFIG:
            {
                return{ }
            }
        default:
            return { ...state }
    }
}




