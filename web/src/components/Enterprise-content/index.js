import React from 'react';
import Star from '../../assets/images/estrelas.png';
import './style.css';

export default function EnterpriseContent(){

    return(
        <div className="enterprise-content" id="enterprise-content">
                <div id="enterprise-results02" className="enterprise-results02">
                            </div>
                    <div id="enterprise-results01" className="enterprise-results01">
                        
                    <div id="enterprise-card-result" className="enterprise-card-result">
                    <div className="Enterprise-texto-Nome">
                        Muito bom
                        </div>
                        <div className="Enterprise-texto">
                            Equipe acolhedora e dedicada, dá para notar que se importam em mostrar o valor das pessoas, tá de parabéns.
                        </div>
                        <div className="enterprise-texto-Avaliacao"  style={{marginTop: "-70px"}}>
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
                        Otima Empresa
                        </div>
                            <div className="Enterprise-texto">
                                Tem varias politicas de inclusão, otima equipe.
                            </div>
                            <div className="enterprise-texto-Avaliacao"  style={{marginTop: "-50px"}}>
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
                        Satisfatorio
                        </div>
                        <div className="Enterprise-texto">
                        Não tive nenhum problema, politica muito inclusiva.
                        </div>
                        <div className="enterprise-texto-Avaliacao" style={{marginTop: "-50px"}}>
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