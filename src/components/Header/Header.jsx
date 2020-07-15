import React from 'react';

import './header.scss'
const headerBackground = require('../../assets/header-default-image.png');

const Header = ({title, description, imageUrl}) =>{
    return(
        <div className='header'
             style={{background: `url(${imageUrl}) center / cover`}}>
            <div className="header__overlay"/>
            <div className="header__title">
                {title}
            </div>
            <div className="header__description">
                {description}
            </div>
        </div>
    )
};

export default Header;