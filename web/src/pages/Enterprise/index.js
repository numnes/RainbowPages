// eslint-disable-next-line no-unused-vars
import React , { useState } from 'react';
import Star from '../../assets/images/estrelas.png';
import Foto from '../../assets/images/O-pão-que-o-Viado-Amassou.jpg';
import './styles.css';

export default function Enterprise(){
    return(
        <div id="enterprise" className="enterprise">
            <div id="enterprise-box">
                <div className="enterprise-bar"> 
                    <div className="box-image-enterprise">
                    <a href="http://localhost:3000/search"><img src={Foto} alt="RainbowPages" className="image-enterprise" /></a>
                    </div>

                    <div className="Enterprise-texto-NomeBar ">
                        O Pão que o Viado Amassou
                        </div>
                        <div className="Enterprise-texto-AvaliacaoBar">
                        4.0
                        </div>
                        <div className="Enterprise-Estrelas-AvaliacaoBar">
                        <img src={Star} alt="stars" className="Enterprise-Stars-image"/>
                        </div>
                        <div className="Enterprise-textoBar">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                         quis nostrud
                         exercitation ullamco laboris nisi ut.
                        </div>
                </div>

                <div className="enterprise-buttons">
                    <button className="enterprise-filter">Comentários</button>
                    <button className="enterprise-filter">Prós</button>
                    <button className="enterprise-filter">Contras</button>
                    <button className="enterprise-filter">Fotos</button>
                </div>
                <div className="enterprise-content" id="enterprise-content">
                <div id="enterprise-results02" className="enterprise-results02">
                            </div>
                    <div id="enterprise-results01" className="enterprise-results01">
                        
                    <div id="enterprise-card-result" className="enterprise-card-result">
                    <div className="Enterprise-texto-Nome">
                        Fulano Beltrano
                        </div>
                        <div className="Enterprise-texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                         quis nostrud
                         exercitation ullamco laboris nisi ut.
                        </div>
                        <div className="Enterprise-texto-Avaliacao">
                        4.0
                        </div>
                        <div className="Enterprise-Estrelas-Avaliacao">
                        <img src={Star} alt="stars" className="Enterprise-Stars-image"/>
                        </div>
                        </div>
                        </div>

                        <div id="enterprise-results" className="enterprise-results">
                        
                    <div id="enterprise-card-result" className="enterprise-card-result">
                    <div className="Enterprise-texto-Nome">
                        Fulano Beltrano
                        </div>
                            <div className="Enterprise-texto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                            quis nostrud
                            exercitation ullamco laboris nisi ut.
                            </div>
                            <div className="Enterprise-texto-Avaliacao">
                            4.0
                            </div>
                            <div className="Enterprise-Estrelas-Avaliacao">
                            <img src={Star} alt="stars" className="Enterprise-Stars-image"/>
                            </div>
                        </div>
                        </div>

                        <div id="enterprise-results" className="enterprise-results">
                        
                    <div id="enterprise-card-result" className="enterprise-card-result">
                    <div className="Enterprise-texto-Nome">
                        Fulano Beltrano
                        </div>
                        <div className="Enterprise-texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                         quis nostrud
                         exercitation ullamco laboris nisi ut.
                        </div>
                        <div className="Enterprise-texto-Avaliacao">
                        4.0
                        </div>
                        <div className="Enterprise-Estrelas-Avaliacao">
                        <img src={Star} alt="stars" className="Enterprise-Stars-image"/>
                        </div>
                        </div>
                        </div>
                </div>
                <div className="footer ">FOOTER</div>
            </div>
        </div>
    )
}