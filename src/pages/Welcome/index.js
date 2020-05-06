import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function Welcome(){
    const [estado, setEstado] = useState('AL');
    const [cidade, setCidade] = useState();
    const {citys, setCitys} = useState('Aurora');
    const history = useHistory();

    function enviar(){
        localStorage.setItem('cidade', cidade)
        localStorage.setItem('estado', estado)
        history.push('/home')   
        
    }

    function pesquisar(){
      let all = axios.get('https://brasil.io/api/dataset/covid19/caso/data/?format=json&is_last=true&page_size=10000')
        for(let k = 0; k < all.length; k++){
            if(all[k]['state'] === estado){
                setCitys(citys)
                console.log(citys)
            }
        }
    }
        

    useEffect(()=>{
        alert(`Devido a alguns problemas de dados 
        algumas cidades do Brasil estão temporáriamente inacessíveis!
        Certifique-se e iniciar com letra MAIÚSCULA!`);
    }, [])


    return(
        <div className="container">
        
            <div className="top">
                <div className="radar">
                    <h2 className="title">Radar de Corona Virús</h2>
                </div>
                <div className="text">
                    Bem vindo a nossa página.
                    Preencha as informações abaixo para ver as estatísticas
                    do seu munícipio sobre o <br /> <span>COVID-19!</span>
                </div>
            </div>
            <section className="form">
            <form onSubmit={enviar} >

                    <select name="estado" value={estado} onChange={e => setEstado(e.target.value)}>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MG">MG</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PE">PE</option>
                        <option value="PR">PR</option>
                        <option value="RJ">RJ</option>
                        <option value="RR">RR</option>
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="AM">AM</option>
                        <option value="AC">AC</option>
                        <option value="MA">MA</option>
                        <option value="PI">PI</option>
                        <option value="RN">RN</option>
                        <option value="RO">RO</option>
                        <option value="TO">TO</option>
                        <option value="DF">DF</option>
                    </select>
                    <div className="separarrr"></div>
                    <div>

                    <select name="cidade" value={cidade} onSelect={e => setCidade(e.target.value)}>


                        <option value = {citys}>{citys}</option>
                    
                    </select>

                    </div>
                    <button type="submit">Ver Casos</button>
            </form>
            </section>


            <footer>#FicaEmCasa <br />
        <span className="copy">Copyright ©2020 by Marcio Fernandes and
         Eduardo Batista Leite</span>
         </footer>



        </div>
    );
}