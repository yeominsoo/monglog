import React, { memo } from 'react';
import '../../client/main.css';
import {Route} from 'react-router-dom';

import TopMenu from './MainTopMenu';

const MainContent = memo(({menuList}) => {
   
    return (
        <>
            <TopMenu menuList={menuList}/>
            {
                menuList.map((v,i) => {
                    return (
                            !v.isLink ? <Route exact path={v.path} component={v.comp} /> : <> </>
                    )
                })
            }
        </>
    )
})
export default MainContent;