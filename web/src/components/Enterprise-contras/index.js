import React from 'react';
import Star from '../../assets/images/estrelas.png';
import './styles.css';

export default function EnterpriseContent(){

    return(
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
    )
}