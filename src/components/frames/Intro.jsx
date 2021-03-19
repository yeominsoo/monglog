import React from 'react';
import {Route} from 'react-router-dom';

import IntroContent from '../../components/frames/IntroContent';
import MainContent from '../../components/frames/MainContent';


const Intro = ({menuList}) => {
    return (
        <>
            <Route exact path="/" render={(props) => {
                    return(
                        <IntroContent menuList={menuList} mainPath={props.match.url}/>
                    )
                }}
            />
            <Route path="/main" 
                render={(props) => {
                    return(
                        <MainContent menuList={menuList} mainPath={props.match.url}/>
                    )
                }}
            />
        </>
    )
}

export default Intro;
