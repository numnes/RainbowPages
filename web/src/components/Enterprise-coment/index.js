import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './styles.css';

export default function EnterpriseComent(){

    function msg() {
        alert("Você clicou no botão!")
      };
      
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
                    <textarea id="cargo" className="cargo"></textarea>
                    <div className="text-nota01" for="nota">
                        Nota
                        <div className="star" for="nota">
                            <Rating name="read-only" value={0} id="star" className="star"/>
                        </div>     
                    </div>
                    <div className="text-nota" for="nota">
                        Comentário  
                    </div>
                    <textarea id="coment"></textarea>
                    <div className="text-nota" for="nota">
                        Prós  
                    </div>
                    <textarea id="pros" className="contra"></textarea>

                    <div className="text-nota" for="nota">
                        Contras 
                    </div>
                    <textarea id="contra" className="contra"></textarea>
                        <div class="button">
                            <input type="button" value="Enviar" onclick={()=>msg()}/>
                        </div>
                </div>
                
            </form>

            <script>
        </script> 
        </div>
    )
}                     
