import React from 'react';
import BackgroundSlider from "react-background-slider";

import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';
import image7 from '../../images/image7.png';
import image8 from '../../images/image8.png';

  const ImageSlider = () => {
    const images = [ image1, image2, image3, image4, image5, image6, image7, image8 ];
    return (
      <> 
        <BackgroundSlider  duration={10} transition={2} images={images} />
      </>
    );
  }

  export default ImageSlider;
  