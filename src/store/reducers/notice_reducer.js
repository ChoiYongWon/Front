import ACTION from "../actions/notice_action"

export default (state = InitialValue, action)=>{
    if(state===undefined) { return { }}
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

const InitialValue = {
    region : "수성구"
}


