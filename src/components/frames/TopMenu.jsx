import React, {useState} from 'react';
import '../../client/common.css';

const TopMenu = () => {
    const [menuList, setMenuList] = useState(
        [
            {name: "MONGLOG", path: "/intro"},
            {name: "GALLERY1", path: "/gallery1"},
            {name: "GALLERY2", path: "/gallery2"},
            {name: "PRODUCT", path: "/prod"},
            {name: "RESERVATION", path: "/reservation"},
            {name: "CONFIRM", path: "/confirm"},
            {name: "BLOG", path: "/blog"},
            {name: "INSTAGRAM", path: "/instagram"},
        ]
    );
    return (
        <>
            <div className="top-container">
                <div className="top-bg">
                </div>
                <div className="top-wrapper">
                    <div className="top-menu-wd">
                        <h1 className="top-logo">MONGLOG PICTURES</h1>
                        <ul className="top-menu">
                            {
                                menuList.map((v,i)=>{
                                    return (
                                        <li><a href={v.path}>{v.name}</a></li>
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