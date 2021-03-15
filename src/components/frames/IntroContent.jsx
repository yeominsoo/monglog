import React, { memo } from 'react';
import '../../client/common.css';
import ImageSlider from '../slide/ImageSlider';

import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';
import image7 from '../../images/image7.png';
import image8 from '../../images/image8.png';

const MainContent = memo(() => {
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
            <div className="main-content">
                <div className="contents-wrapper" >
                    <div className="contents-viewport">
                        <ImageSlider duration={4000} transition={10} images={images}/>
                    </div>
                </div>
            </div>
        </>
    )
})
export default MainContent;