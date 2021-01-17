// eslint-disable-next-line no-unused-vars
import React , { useState } from 'react';
import Star from '../../assets/images/estrelas.png';
import Foto from '../../assets/images/O-pão-que-o-Viado-Amassou.jpg';
import Logo from '../../assets/images/LOGO.ALPHA.final.png';
import './styles.css';

export default function Search(){
    return(
        <div id="search" className="search">
            <div id="search-box">
                <div className="serch-bar">
                    <div className="box-image-logo">
                    <a href="http://localhost:3000/"><img src={Logo} alt="RainbowPages" className="image-logo" /></a>
                    </div>
                    <input type="text" className="search-bar-input" placeholder={"Procurar uma empresa"}/>
                    <button className="button-filter">Filtro</button>
                    <button className="button-filter">Filtro</button>
                    <button className="button-filter">Filtro</button>
                    <button className="button-filter">Filtro</button>
                </div>
                <div className="search-content" id="search-content">
                    <div id="search-results" className="search-results">
                    <div id="search-card-result" className="search-card-result">
                        <div className="photo">
                            <img src={Foto} alt="Foto" className="image-foto"/>
                        </div> 
                        <div className="texto-NomeEmpresa">
                        Pão que o Viado Amassou
                        </div>
                        <div className="texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                         quis nostrud
                         exercitation ullamco laboris nisi ut.
                        </div>
                        <div className="texto-Avaliacao">
                        4.0
                        </div>
                        <div className="Estrelas-Avaliacao">
                        <img src={Star} alt="stars" className="Stars-image"/>
                        </div>
                        <div className="Button">
                        <a href="http://localhost:3000/enterprise"><button className="Button-VerMais">Ver Mais</button></a>
                        </div>
                        </div>
                        <div id="search-card-result" className="search-card-result">
                        <div className="photo">
                            <img src={Foto} alt="Foto" className="image-foto"/>
                        </div> 
                        <div className="texto-NomeEmpresa">
                        Pão que o Viado Amassou
                        </div>
                        <div className="texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                         quis nostrud
                         exercitation ullamco laboris nisi ut.
                        </div>
                        <div className="texto-Avaliacao">
                        4.5
                        </div>
                        <div className="Estrelas-Avaliacao">
                        <img src={Star} alt="stars" className="Stars-image"/>
                        </div>
                        <div className="Button">
                        <a href="http://localhost:3000/enterprise"><button className="Button-VerMais">Ver Mais</button></a>
                        </div>
                        </div>
                        <div id="search-card-result" className="search-card-result">
                        <div className="photo">
                            <img src={Foto} alt="Foto" className="image-foto"/>
                        </div> 
                        <div className="texto-NomeEmpresa">
                        Pão que o Viado Amassou
                        </div>
                        <div className="texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                         quis nostrud
                         exercitation ullamco laboris nisi ut.
                        </div>
                        <div className="texto-Avaliacao">
                        3.0
                        </div>
                        <div className="Estrelas-Avaliacao">
                        <img src={Star} alt="stars" className="Stars-image"/>
                        </div>
                        <div className="Button">
                        <a href="http://localhost:3000/enterprise"><button className="Button-VerMais">Ver Mais</button></a>
                        </div>
                        </div>
                        <div class="parent">
                            <div class="div1"> </div>
                        </div>
                    </div>
                </div>
                <div className="footer ">FOOTER</div>
            </div>
        </div>
    )
}