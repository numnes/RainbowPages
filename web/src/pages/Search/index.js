// eslint-disable-next-line no-unused-vars
import React , { useState, useEffect } from 'react';
import Star from '../../assets/images/estrelas.png';
import Foto from '../../assets/images/O-pão-que-o-Viado-Amassou.jpg';
import Logo from '../../assets/images/LOGO.ALPHA.final.png';
import './styles.css';
import api from '../../services/api';
import Footer from '../../components/Footer';
import SearchIcon from '@material-ui/icons/Search';
import Rating from '@material-ui/lab/Rating';
import { Link , useHistory } from 'react-router-dom';

 const Search = () => {

    const history = useHistory();
    let homeSearch = localStorage.getItem('homeSearch');
    const [search, setSearch] = useState([]);
    const [companies, setCompanies] = useState([]);
    
    let searchCompanies = (()=>{
        // atualiza os resultados conforme as novas buscas
        api.post('companylistFiltered', {"filtro" : search}).then(response => {
            setCompanies(response.data[0].nome? response.data: response.data[0]);
        });
    });

    function viewCompany(id){
        localStorage.setItem('selectedCompany', id);
        history.push('/enterprise');
    }

    useEffect(()=>{
        // carrega os resultados da busca feita na pagina inicial
        if(companies.length == 0){
            api.post('companylistFiltered', {"filtro" : homeSearch}).then(response => {
                setCompanies(response.data[0].nome? response.data: response.data[0]);
                homeSearch = search;
            });
        }
    });
    
    return(
        <div id="search" className="search">
            <div id="search-box">
                <div className="serch-bar">
                    <div className="box-image-logo">
                        <a href="http://localhost:3000/"><img src={Logo} alt="RainbowPages" className="image-logo" /></a>
                    </div>
                    <input type="text" className="search-bar-input" placeholder={"Procurar uma empresa"} value={search} onChange={e => setSearch(e.target.value)}/>
                    <button className="button-search" alt="Buacar" onClick={searchCompanies}><SearchIcon/></button>
                    <button className="button-filter">Filtros</button>   
                </div>
                <div className="search-content" id="search-content">
                    
                    <div id="search-results" className="search-results">
                        {
                        // lista as empressas correspondentes a busca
                        companies ? companies.map(comp => (
                            comp.nome?
                            <>
                                <div id="search-card-result" className={(comp.vip)? "search-card-result top-round-Rainbow" : "search-card-result"}>
                                    <div className="photo">
                                        <img src={process.env.PUBLIC_URL + "iconesEmpresas/"+comp.id + ".png"} alt="Foto" className="image-foto"/>
                                    </div> 
                                    <div className="texto-NomeEmpresa">
                                        {comp.nome}
                                    </div>
                                    <div className="texto">
                                        {comp.descricao}
                                    </div>
                                    <div className="avaliacao-box">
                                        <div className="texto-Avaliacao">
                                            {comp.nota}
                                        </div>
                                        <div className="Estrelas-Avaliacao">
                                            <Rating name="read-only" value={comp.nota} readOnly />
                                        </div>
                                        <div className="Button">
                                            <button className="Button-VerMais" onClick={()=>viewCompany(comp.id)}>Ver Mais</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="parent">
                                    <div class="div1"> </div>
                                </div>
                            </>:
                            <></>
                            )
                        ): console.log("teste")}
                    </div>
                </div>
                <div className="footer ">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}


export default Search;