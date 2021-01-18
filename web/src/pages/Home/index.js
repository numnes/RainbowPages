// eslint-disable-next-line no-unused-vars
import React , { useState, useEffect } from 'react';
import Banner from '../../assets/images/BANNER.png';
import Logo from '../../assets/images/LOGO.ALPHA.final.png';
import Foto1 from '../../assets/images/rainbow.png';
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
          original: process.env.PUBLIC_URL + "tweet1.png",
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: process.env.PUBLIC_URL + "tweet2.png",
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: process.env.PUBLIC_URL + "tweet3.png",
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
                            <img src={Foto1} alt="RainbowPages" className="image-logo"/>
                        </div>
                        <div className="texto-logo">
                        A Rainbow Pages é uma plataforma de relacionamento entre empresas e jovens LGBT+, e nosso objetivo é proporcionar um espaço de voz para esse público. As empresas se beneficiam pela divulgação e reconhecimento do seu trabalho, enquanto a comunidade LGBT+ ganha uma maior inclusão.
                        </div>
                    </div>
                    <div className="home-pannel-comments ">
                        <div className="comment-images-box">
                            <ImageGallery className="comment-images" items={images} showThumbnails={false}  showFullscreenButton = {false} showPlayButton={false}/>
                        </div>
                    </div>
                </div>
                <div className="home-footer ">
                <div className="footer "> <Footer/></div>
                   
                </div>
            </div>
        </div>
    );

}

