import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function Welcome(){
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const history = useHistory();

    function enviar(){
        localStorage.setItem('cidade', cidade)
        localStorage.setItem('estado', estado)
        if(cidade != null){
            history.push('/home')
        }else{
            alert('O Nome da cidade é invalido. Certifique-se que a inicial está maiusculá e o nome correto!')
        }
    }

    useEffect(()=>{
        alert(`Devido a alguns problemas de dados 
        algumas cidades do Brasil estão temporáriamente inacessíveis!`);
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
                    <input placeholder="Estado" value={estado} 
                    onChange={e => setEstado(e.target.value)} />
                    <input placeholder="Cidade" value={cidade}
                    onChange={e => setCidade(e.target.value)} />
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