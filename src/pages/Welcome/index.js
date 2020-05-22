import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


import './styles.css';

export default function Welcome(){
    const [estado, setEstado] = useState('AL');
    const [cidade, setCidade] = useState();
    const [options, setOptions] = useState([]);
    
    const history = useHistory();

    function enviar(){
        localStorage.setItem('cidade', cidade)
        localStorage.setItem('estado', estado)

        if(cidade[0] != null){
            history.push('/home')
        }else{
            alert('O Nome da cidade é invalido. Certifique-se que a inicial está maiusculá e o nome correto!')
        }
    }

    useEffect(()=>{

        searchh()
    }, [estado])

    async function searchh(){
        let resultado = await Axios.get(`https://brasil.io/api/dataset/covid19/caso/data/?format=json&is_last=True&state=${estado}`);
        let infos = resultado.data.results;
        setOptions(infos)
    }

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
                <div>
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
                </div>
                   
                    <div className="separarrr"></div>
                    <div>

                    <select name="cidade" value={cidade} onChange={e => setCidade(e.target.value)}>
                        
                        
                    {options.map(ops=> (
                        <option value={ops.city} key={ops.city_ibge_code}>{ops.city}</option>
                ))}

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
