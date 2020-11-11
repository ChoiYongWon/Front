import ACTION from "../store/actions/action"
import store from "../store/store"


export default () =>{

    
    if(!store.getState().select_reducer.selectId)
    {
        console.log("localStorge에서 id받는중,,,")
        if(localStorage.getItem("SELECT_ID")){
            store.dispatch(ACTION.SELECT_CONFIG__ACTION_FUNC({
                select : {
                    selectId : localStorage.getItem("SELECT_ID")
                }
            }))
        }else{
            alert("게시물을 다시 선택해 주세요")
            window.close()
        }
        
    }else{
        console.log("redux에서 id받는중,,,,")
    }
}