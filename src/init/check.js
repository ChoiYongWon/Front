
import store from "../store/store"

let check = {

    manage : () =>{
        localStorage.removeItem("SELECT_ID")
        console.log(store.getState().login_reducer.logined)
        console.log(store.getState().user_reducer.role)
 
    }


}

export default check;