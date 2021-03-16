import React, { memo } from 'react';
import '../../client/intro.css';
import ImageSlider from '../slide/ImageSlider';

import TopMenu from './IntroTopMenu';

import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';
import image7 from '../../images/image7.png';
import image8 from '../../images/image8.png';

const MainContent = memo(({menuList}) => {
    const images = [ 
        {id: 0, url: image1}, 
        {id: 1, url: image2}, 
        {id: 2, url: image3}, 
        {id: 3, url: image4}, 
        {id: 4, url: image5}, 
        {id: 5, url: image6}, 
        {id: 6, url: image7}, 
        {id: 7, url: image8} ];
    return (
        <>
            <TopMenu menuList={menuList}/>
            <div className="main-content">
                <div className="contents-wrapper" >
                    <div className="contents-viewport">
                        <ImageSlider nextPage={4000} transTime={10} images={images}/>
                    </div>
                </div>
            </div>
        </>
    )
})
export default MainContent;