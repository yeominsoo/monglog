import React, {useState, useEffect, memo} from 'react';
import { useTransition, animated} from 'react-spring';
import {Link} from 'react-router-dom';
import '../../client/intro.css';

  const ImageSlider = memo(({nextPage, transTime, images}) => {
    const [index, set] = useState(0);
    const imageList = images;
    let imageSize = Number(imageList.length);

    const transitions = useTransition(imageList[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { mass: 1, tension: (transTime * 100), friction: (transTime * 50) },
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % imageSize), nextPage), [imageSize, nextPage])
    
    return transitions.map(({ item, props, key }) => (
      <Link to="/main/gallery1">
        <animated.div
          key={key}
          className="bg"
          style={{ ...props, backgroundImage: `url(${item.url}` }}
        />
      </Link>
    ))
  });

  export default ImageSlider;
  