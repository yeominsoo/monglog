import React from 'react';

import TopMenu from '../../components/frames/TopMenu';
import IntroContent from '../../components/frames/IntroContent';

const Intro = ({menuList}) => {
    console.log('Intro : list :: ' + menuList);
    return (
        <>
            <TopMenu menuList={menuList}/>
            <IntroContent />
        </>
    )
}

export default Intro;