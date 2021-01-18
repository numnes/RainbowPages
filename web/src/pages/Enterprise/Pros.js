// eslint-disable-next-line no-unused-vars

import Star from '../../assets/images/estrelas.png';
import Foto from '../../assets/images/O-pão-que-o-Viado-Amassou.jpg';
import Footer from '../../components/Footer';
import EnterprisePros from '../../components/Enterprise-pros';
import './styles.css';
import api from '../../services/api';
import Rating from '@material-ui/lab/Rating';
import React , { useState, useEffect } from 'react';

export default function Enterprise(){

    const [company, setCompany] = useState(0);
    let idComp = localStorage.getItem('selectedCompany');

    useEffect(()=>{
        api.post('companylistById', {"id" : idComp}).then(response => {
            setCompany(response.data[0]);
        });
    });

    return(
        <div id="enterprise" className="enterprise">
            <div id="enterprise-box">
                <div className="enterprise-bar"> 
                    <div className="box-image-enterprise">
                        <img src={process.env.PUBLIC_URL + "iconesEmpresas/"+company.id + ".png"} alt="Foto" className="image-enterprise"/>
                    </div>

                    <div className="Enterprise-texto-NomeBar ">
                        {company.nome}
                    </div>
                    <div className="Enterprise-texto-AvaliacaoBar">
                        {company.nota}
                    </div>
                    <div className="Enterprise-Estrelas-AvaliacaoBar">
                        <Rating name="read-only" value={parseInt(company.nota)}  className="Enterprise-Stars-image" readOnly />
                    </div>
                    <div className="Enterprise-textoBar">
                        {company.descricao}
                    </div>
                </div>

                <div className="enterprise-buttons">
                    <button className="enterprise-filter"><a href='http://localhost:3000/enterprise'>Comentários</a></button>
                    <button className="enterprise-filterhover"><a href='http://localhost:3000/pros'>Prós</a></button>
                    <button className="enterprise-filter"><a href='http://localhost:3000/contras'>Contras</a></button>
                    <button className="enterprise-filter"><a href='http://localhost:3000/fotos'>Fotos</a></button>
                    <button className="enterprise-filter"><a href='http://localhost:3000/comentar'>Avaliar Empresa</a></button>
                </div>
                <EnterprisePros/>
                <div className="footer "><Footer/></div>
            </div>
        </div>
    )
}