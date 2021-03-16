import React from 'react';
import {Link} from 'react-router-dom';
import '../../client/main.css';

const TopMenu = ({menuList}) => {
    return (
        <>
            <div className="main-top-container">
                <div className="main-top-bg">
                </div>
                <div className="main-top-wrapper">
                    <div className="main-top-menu-wd">
                        <h1 className="main-top-logo"><Link to="/">MONGLOG PICTURES</Link></h1>
                        <ul className="main-top-menu">
                            {
                                menuList.map((v,i)=>{
                                    return (
                                        v.isLink ? 
                                            <li><a href={v.path} target="_blank" rel="noopener noreferrer" >{v.name}</a></li>
                                            :
                                            <li><Link to={v.path} >{v.name}</Link></li>
                                        
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopMenu;