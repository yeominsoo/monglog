import React from 'react';
import {Link} from 'react-router-dom';
import '../../client/intro.css';

const TopMenu = ({menuList}) => {
    return (
        <>
            <div className="top-container">
                <div className="top-bg">
                </div>
                <div className="top-wrapper">
                    <div className="top-menu-wd">
                        <h1 className="top-logo"><Link to="/">MONGLOG PICTURES</Link></h1>
                        <ul className="top-menu">
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