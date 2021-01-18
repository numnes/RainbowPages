import React from 'react';
import Star from '../../assets/images/estrelas.png';
import './styles.css';
import Rating from '@material-ui/lab/Rating';

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
                        Equipe acolhedora, me sinto em casa.
                        </div>
                        <div className="Enterprise-texto-Avaliacao" style={{marginTop: "-5px"}}>
                        5.0
                        </div>
                        <div className="Enterprise-Estrelas-Avaliacao">
                        <Rating name="read-only" value={5}  className="Enterprise-Stars-image" readOnly />

                        </div>
                        </div>
                        </div>

                        <div id="enterprise-results" className="enterprise-results">
                        
                    <div id="enterprise-card-result" className="enterprise-card-result">
                    <div className="Enterprise-texto-Nome">
                      
                        </div>
                            <div className="Enterprise-texto">
                            Fui tratada com muito respeito e educação.
                            </div>
                            <div className="Enterprise-texto-Avaliacao" style={{marginTop: "-5px"}}>
                            3.0
                            </div>
                            <div className="Enterprise-Estrelas-Avaliacao">                        
                            <Rating name="read-only" value={3}  className="Enterprise-Stars-image" readOnly />
                            
                            </div>
                        </div>
                        </div>

                        <div id="enterprise-results" className="enterprise-results">
                        
                    <div id="enterprise-card-result" className="enterprise-card-result">
                    <div className="Enterprise-texto-Nome">
                        
                        </div>
                        <div className="Enterprise-texto">
                        Não  tenho o que reclamar nos tres anos que trabalhei na equipe.
                        </div>
                        <div className="Enterprise-texto-Avaliacao" style={{marginTop: "-20px"}}>
                        4.0
                        </div>
                        <div className="Enterprise-Estrelas-Avaliacao">
                        <Rating name="read-only" value={4}  className="Enterprise-Stars-image" readOnly />
                        
                        </div>
                        </div>
                        </div>
                </div>
    )
}