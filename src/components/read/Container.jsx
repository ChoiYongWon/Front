import React from 'react';
import "../../css/create.css";
import TopBar from '../manage/TopBar';
//import DoneButton from './DoneButton';
import DoneButton from '../../containers/create/DoneButton'
import Content from './Content'
import run from '../../init/start'
const Container = () => {
    run();
    return (
        <>
            <div className="container">
                <TopBar></TopBar>
                <DoneButton></DoneButton>
                <Content></Content>
            </div>
        </>
    )

}


export default Container;