import React from 'react';
import {Link} from 'react-router-dom';
import '../../client/intro.css';

const TopMenu = ({menuList}) => {
    return (
        <>
            <div className="intro-top-container">
                <div className="intro-top-bg">
                </div>
                <div className="intro-top-wrapper">
                    <div className="intro-top-menu-wd">
                        <h1 className="intro-top-logo"><Link to="/">MONGLOG PICTURES</Link></h1>
                        <ul className="intro-top-menu">
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