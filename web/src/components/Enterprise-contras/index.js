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
                        
                        </div>
                        <div className="Enterprise-texto">
                            Alguns colegas ainda vivem no seculo passado, passei por algunsmomentos complicados, apesar de ter recebido ajuda da diretoria achei isso meio chato.
                        </div>
                        <div className="Enterprise-texto-Avaliacao" style={{marginTop: "-50px"}}>
                        3.0
                        </div>
                        <div className="Enterprise-Estrelas-Avaliacao">
                        <img src={Star} alt="stars" className="Enterprise-Stars-image"/>
                        </div>
                        </div>
                        </div>

                        <div id="enterprise-results" className="enterprise-results">
                        
                    <div id="enterprise-card-result" className="enterprise-card-result">
                    <div className="Enterprise-texto-Nome">
                        </div>
                            <div className="Enterprise-texto">
                            Poderia ter politicas melhores de contratação.
                            </div>
                            <div className="Enterprise-texto-Avaliacao" style={{marginTop: "-5px"}}>
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