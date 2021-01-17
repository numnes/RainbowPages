// eslint-disable-next-line no-unused-vars
import React , { useState, useEffect } from 'react';
import Banner from '../../assets/images/BANNER.png';
import Logo from '../../assets/images/LOGO.ALPHA.final.png';
import ImageGallery from 'react-image-gallery';
import api from '../../services/api';
import Footer from '../../components/Footer';
import SearchIcon from '@material-ui/icons/Search';
import { Link , useHistory } from 'react-router-dom';

import './styles.css';

import Carrousel from  './Carrousel'

export default function Home(){
    const history = useHistory();

    const[ vips, setVips ] = useState([]);
    const[ search, setSearch] = useState([]);

    function clickSearch(){
        localStorage.setItem('homeSearch', search);
        history.push('/search');
    }

    useEffect(()=>{
        api.get('companylistVip').then(response => {
            setVips(response.data);
        });
    });
    
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
    var sectionStyle = {
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
    };
    return (
        <div id='home-page'>
            <div id="home-page-content">
                <div className="home-banner item" >
                    <div className="background-banner" style = {sectionStyle}></div>
                    <div className="logo-banner-box">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div id="home-pannel" className="home-pannel">
                    <div className="home-pannel-search ">
                        <input 
                            className="pannel-search-bar"
                            key="random1"
                            value={""}
                            placeholder={"Procurar uma empresa"}
                            value = {search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button className="button-search" alt="Buacar" onClick={clickSearch}><SearchIcon/></button>
                    </div>
                    <div className="home-pannel-cards">
                        <Carrousel vips={vips}/>
                    </div>
                    <div className="home-pannel-about">
                        <div className="logo-box">
                            <img src={Logo} alt="RainbowPages" className="image-logo"/>
                        </div>
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
                <div className="home-footer ">
                    <Footer/>
                </div>
            </div>
        </div>
    );

}

