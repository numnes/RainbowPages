// eslint-disable-next-line no-unused-vars
import React , { useState } from 'react';
import Banner from '../../assets/images/RainbowPlaceholder.svg';
import Logo from '../../assets/images/logoPlaceHolder.jpg';
import ImageGallery from 'react-image-gallery';

import './styles.css';

import Carrousel from  './Carrousel'

export default function Home(){
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
    return (
        <div id='home-page'>
            <div id="home-page-content">
                <div className="home-banner item">
                    <img src={Banner} alt="banner RainbowPages" className="banner-image"/>
                </div>
                <div id="home-pannel" className="home-pannel">
                    <div className="home-pannel-search ">
                        <input 
                            className="pannel-search-bar"
                            key="random1"
                            value={""}
                            placeholder={"Procurar uma empresa"}
                        />
                    </div>
                    <div className="home-pannel-cards">
                        <Carrousel/>
                    </div>
                    <div className="home-pannel-about">
                        <img src={Logo} alt="RainbowPages" className="image-logo"/>
                        <div className="texto-logo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="home-pannel-comments ">
                        <div className="comment-images-box">
                            <ImageGallery className="comment-images" items={images} showThumbnails={false}  showFullscreenButton = {false} showPlayButton={false}/>
                        </div>
                    </div>
                </div>
                <div className="home-footer ">FOOTER</div>
            </div>
        </div>
    );

}

