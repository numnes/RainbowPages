import React , { useState } from 'react';
import Logo from '../../assets/images/logoPlaceHolder.jpg';
import './styles.css';

export default function Search(){
    return(
        <div id="search" className="search">
            <div id="search-box">
                <div className="serch-bar">
                    <div className="box-image-logo">
                        <img src={Logo} alt="RainbowPages" className="image-logo"/>
                    </div>
                    <input type="text" className="search-bar-input"/>
                </div>
                <div className="search-content" id="search-content">
                    <div id="search-results" className="search-result">
                        <div id="search-card-result"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}