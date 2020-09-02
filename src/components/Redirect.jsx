import React from "react"
import qs from "qs"
import _ from "../config/config"

const getUser = async(callback) => {
    window.Kakao.API.request({
        url: '/v2/user/me',
        success: function(res) {
            callback({
                user : { username : res.properties.nickname }
            })
        },
        fail: function(error) {
          console.log(
            'login success, but failed to request user information: ' +
              JSON.stringify(error)
          )
          
        },
      })
}

const getToken = async (AUTHORIZATION_CODE, callback) => {
    let payload = "grant_type=authorization_code&client_id="+_.REST_KEY+"&redirect_url="+_.REDIRECT_URL+"&code="+AUTHORIZATION_CODE;
    let token = await fetch(_.KAKAO_TOKEN_URL, {
        method: "POST",
        headers : { 
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
           },
        body: payload
    }).then(res=>res.json())
    
    if(token.access_token){
        window.Kakao.Auth.setAccessToken(token.access_token);
        localStorage.setItem("KAKAO_ACCESS_TOKEN", token.access_token)
        callback()
        return true
    }else{

        return false
    }
}

const LoginProcess = async (AUTHORIZATION_CODE, logined_callback, set_user_callback) => {
    let token = await getToken(AUTHORIZATION_CODE, logined_callback)
    if(token){
        await getUser(set_user_callback)
    }else{
        return false
    }

}

const Redirect =  ({location, history, LOGINED, SET_USER})=>{
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    if(!query.code) alert("정상적인 접근이 아닙니다.")
    else LoginProcess(query.code, LOGINED, SET_USER)
    history.push("/")
    return (
        <>
            
        </>
    )
}

export default Redirect