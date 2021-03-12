import React from 'react';
import '../../client/common.css';
import ImageSlider from '../slide/ImageSlider';

const MainContent = () => {

    return (
        <>
            <div className="main-content">
                <div className="contents-wrapper" >
                    <div className="contents-viewport">
                        <ImageSlider />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContent;