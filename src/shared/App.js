import React from 'react';

import Intro from '../components/frames/Intro';

import About from '../page/About';
import Gallery1 from '../page/Gallery1';
import Gallery2 from '../page/Gallery1';
import Product from '../page/Product';
import Reservation from '../page/Reservation';
import Confirm from '../page/Confirm';


const App = () => {
    let menuList = 
        [
            {name: "MONGLOG",       path: "/main/about",        comp: About,        isLink:false},
            {name: "GALLERY1",      path: "/main/gallery1",     comp: Gallery1,     isLink:false},
            {name: "GALLERY2",      path: "/main/gallery2",     comp: Gallery2,     isLink:false},
            {name: "PRODUCT",       path: "/main/prod",         comp: Product,      isLink:false},
            {name: "RESERVATION",   path: "/main/reservation",  comp: Reservation,  isLink:false},
            {name: "CONFIRM",       path: "/main/confirm",      comp: Confirm,      isLink:false},
            {name: "BLOG",          path: "https://blog.naver.com/jeongminsu0523",  comp: null,        isLink:true},
            {name: "INSTAGRAM",     path: "https://www.instagram.com/w0_0jm",       comp: null,        isLink:true},
        ];

    return (
        <>
            <Intro menuList={menuList}/>
        </>
    )
}

export default App;
