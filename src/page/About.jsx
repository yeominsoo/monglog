import React, { memo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../client/main.css';

const About = memo(({menuList}) => {
    
    const [attrList, setAttrList] = useState([{
        attr1: '111421'
    }]);
    

    const onclickEvt = () => {
        setAttrList(
            attrList => [...attrList
                , {attr2 : '22222'}
                , {attr3 : 'bawwa'}
                , {attr4 : 'dwad'}
            ]);
    };

    return (
        <> 
            <h2 style={{backgroundColor: '#dddddd'}} >About 
                
            </h2>
            <Button variant="primary" onClick={onclickEvt}> test
            </Button>
                {
                    attrList.map((v, i) => {
                        return(
                            <p>{v.attr3}</p>
                        );
                    })
                }
        </>
    )
})
export default About;