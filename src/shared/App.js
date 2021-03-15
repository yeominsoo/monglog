import React, {useState} from 'react';
import {Route} from 'react-router-dom';

import Intro from '../components/frames/Intro';
import Main from '../components/frames/Main';

const App = () => {
    const [menuList, setMenuList] = useState(
        [
            {name: "MONGLOG", path: "/main/about", comp: Main},
            {name: "GALLERY1", path: "/main/gallery1", comp: Main},
            {name: "GALLERY2", path: "/main/gallery2", comp: Main},
            {name: "PRODUCT", path: "/main/prod", comp: Main},
            {name: "RESERVATION", path: "/main/reservation", comp: Main},
            {name: "CONFIRM", path: "/main/confirm", comp: Main},
            {name: "BLOG", path: "/main/blog", comp: Main},
            {name: "INSTAGRAM", path: "/main/instagram", comp: Main},
        ]
    );
    return (
        <>
            <Route exact path="/" render={() => {
                <Intro menuList={menuList}/>
            }}/>
            <Route path="/main"
                render={props => (
                    <>
                        {
                            menuList.map((v,i) => {
                                return (
                                    <Route key={i} exact path={`${props.match.url}/${v.path}`} component={v.comp}/>
                                )
                            })
                        }
                        
                    </>
                )}
            />
        </>
    )
}

export default App;
