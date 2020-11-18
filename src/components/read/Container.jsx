import React from 'react';
import "../../css/create.css";
import TopBar from '../manage/TopBar';
import Content from '../../containers/read/Content'
import run from '../../init/start'
import getId from '../../init/getSelectId'
import '../../css/read.css';
import UrgentButton from "./urgentButton"
import UrgentTitle from "./UrgentTitle"
import store from "../../store/store"

const Container = () => {
    run();

    getId();
    var userRole = store.getState().user_reducer.role
    return (
        <>
            <div className="container">
                <UrgentTitle></UrgentTitle>
                <TopBar></TopBar>
                <Content></Content>
                <UrgentButton></UrgentButton>
            </div>
        </>
    )

}


export default Container;