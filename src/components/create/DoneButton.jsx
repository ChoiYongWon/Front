import React from 'react'
import fetchData from "../../business/service/fetch_notice"
//import YAT from "../service/yat"

const DoneButton = (props, history) => {

    const data = JSON.stringify({
        "title": props.title,
        "activityRegisterRequestDto": {
            "content": props.content, "region": props.region, "nor": parseInt(props.nor),
            "dov": props.dov, "tov": props.tov + ":00", "dod": props.dod
        }

    });

    const POSTdata = (data) => {
        fetchData.createNotice(data)
            .then((response) => {
                console.log(response)
                props.SUBMIT()
            })
    }


    const isValue = (props) => {
        if (props.title === undefined || props.content === undefined || props.nor === undefined || props.dov === undefined || props.tov === undefined || props.dod === undefined || props.region === undefined) {
            console.log(props);
            alert('내용을 모두 입력하세요');

            return false;
        } return true;


    }


    const onClick = () => {
        //여기서 fetch ( method : post)

        if (isValue(props) === true) {

            POSTdata(data)

            //props.SUBMIT()
            console.log("create success")
            window.history.back();
            //window.close()


            //history.push('/manage')
        }
    }

        ;

    return (
        <>
            <div className="done container__done">

                <div className="done__btn" onClick={onClick}>게시글 작성 완료</div>
            </div>
        </>
    )
}

export default DoneButton;