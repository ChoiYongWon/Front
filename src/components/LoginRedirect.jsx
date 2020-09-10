import React from "react"
import qs from "qs"
import LoginProcess from "../business/transaction/login_process"
import getUserProcess from "../business/transaction/get_user_process"

const LoginRedirect =  ({location, history, LOGINED, SET_USER})=>{
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    if(!query.code) alert("정상적인 접근이 아닙니다.")
    else{
        LoginProcess(query.code).then(
                                    (payload)=>{
                                        SET_USER({user : {...payload}})
                                        LOGINED()
                                    }
                                )
                                .then(()=> getUserProcess())
                                .then((user)=>{SET_USER(user)})
                                .then(()=>history.push("/")).catch((err)=>{alert(err)})
    } 
    return (
        <>
            
        </>
    )
}



export default LoginRedirect