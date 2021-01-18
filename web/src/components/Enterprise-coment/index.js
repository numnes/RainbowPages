import './styles.css';
import api from '../../services/api';
import Rating from '@material-ui/lab/Rating';
import React , { useState, useEffect } from 'react';

export default function EnterpriseComent(props){

    const [cargo, setCargo] = useState("");
    const [nota, setNota] = useState(0);
    const [comentario, setComentario] = useState("");
    const [pros, setPros] = useState("");
    const [contras, setContras] = useState("");
    const {empresa} = props;

    function enviarCritica(){
        let comentary = {
            "cargo" : cargo,
            "nota" : nota,
            "comentario" : comentario,
            "pros" : pros,
            "contras" : contras,
            "id_company": empresa
        }
        api.post('cometaryCreate', comentary).then(response => {
            console.log(response.data);
        });
    }
      
    return(
        <div className="coment-content" id="coment-content">
            <form id="coment-results01" className="coment-results01" method="post">                
                <div id="coment-card" className="coment-card">
                    <div className="coment-texto-Nome">
                        <h4>Faça uma avaliação sobre essa empresa:</h4>
                    </div>  
                    <div className="text-nota" for="nota">
                        Você é:  
                    </div>
                    <div className="check-radio" for="nota">
                    Cliente: <input type="radio" id="option" name="option-cliente" value="op1" /> 
                    </div>
                    <div className="check-radio01" for="nota">
                    Funcionário: <input type="radio" id="option" name="option-cliente" value="op2" /> 
                    </div>
                    <div className="text-nota" for="nota">
                        Cargo  
                    </div>
                    <textarea id="cargo" className="cargo" value = {cargo} onChange={e => setCargo(e.target.value)}></textarea>
                    <div className="text-nota01" for="nota">
                        Nota
                        <div className="star" for="nota">
                            <Rating name="read-only" value={nota} id="star" className="star" onChange={e => setNota(e.target.value)}/>
                        </div>     
                    </div>
                    <div className="text-nota" for="nota" value = {comentario} onChange={e => setComentario(e.target.value)}>
                        Comentário  
                    </div>
                    <textarea id="coment" value = {comentario} onChange={e => setComentario(e.target.value)}></textarea>
                    <div className="text-nota" for="nota">
                        Prós  
                    </div>
                    <textarea id="pros" className="contra" value = {pros} onChange={e => setPros(e.target.value)}></textarea>

                    <div className="text-nota" for="nota">
                        Contras 
                    </div>
                    <textarea id="contra" className="contra" value={contras} onChange={e => setContras(e.target.value)}></textarea>
                        <div class="button">
                            <input type="button" value="Enviar" onClick={()=>enviarCritica()}/>
                        </div>
                </div>
                
            </form>

            <script>
        </script> 
        </div>
    )
}                     
