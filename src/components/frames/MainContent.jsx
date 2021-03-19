import React, { memo } from 'react';
import '../../client/main.css';
import {Route} from 'react-router-dom';

import MainTopMenu from './MainTopMenu';

const MainContent = memo(({menuList}) => {
   
    return (
        <>
            <MainTopMenu menuList={menuList}/>
            <div className="main-content">
                <div className="main-contents-wrapper" >
                    <div className="main-contents-page">
                        {
                            menuList.map((v,i) => {
                                return (
                                        !v.isLink ? <Route exact path={v.path} component={v.comp} /> : <> </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
})
export default MainContent;