import React, {useState, useEffect, memo} from 'react';
import { useTransition, animated} from 'react-spring';
import '../../client/common.css';

  const ImageSlider = memo(({duration, transition, images}) => {
    const [index, set] = useState(0);
    const imageList = images;

    const transitions = useTransition(imageList[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { mass: 1, tension: (transition * 100), friction: (transition * 50) },
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % imageList.length), duration), [])
    
    return transitions.map(({ item, props, key }) => (
      <a href="#" >
        <animated.div
          key={key}
          class="bg"
          style={{ ...props, backgroundImage: `url(${item.url}` }}
        />
      </a>
    ))
  });

  export default ImageSlider;
  