import React,{ useState, useEffect } from 'react';
import Axios from 'axios';
import './styles.css'

export default function Welcome(){
    const [resultado, setResultado] = useState({});
    const [estado, setEstado] = useState('Não encontrado');
    const [cidade, setCidade] = useState('Não encontrado');

    useEffect(()=>{
        alert(`As mortes informadas na página
        são apena para mortes causadas pelo COVID-19
        pacientes que morrem de outras causas não são 
        adicionados aos óbitos!`)
        pesquisa()
    },[])

    async function pesquisa(){
        const teste = localStorage.getItem('cidade')
        let resultado = await Axios.get('https://brasil.io/api/dataset/covid19/caso/data/?format=json&is_last=true&page_size=10000');
        let infos = resultado.data.results;
            for(let info in infos){
            if(infos[info]['city'] === teste){
                
                setResultado(infos[info])
                setCidade(localStorage.getItem('cidade'))
                setEstado(localStorage.getItem('estado'))
                if(cidade == 'Aurora'){
                    resultado.deaths+1;
                }
            }
        }
    }

    return(
        <div className="container-home">
        <div className="topo">
            <div className="titlee">Radar Corona Vírus</div>
            <div className="cidadee"><h1>{cidade} - {estado}</h1></div>
            <div className="states">
                <div className="confir">Confirmados</div>
                <div className="deade">Mortos</div>
            </div>
        </div>
        <div className="results">
            <section className="confirmed">{resultado.confirmed}</section>
            <section className="dividir"></section>
            <section className="death">{resultado.deaths}</section>
        </div>
        <section className="date">Atualizado: {resultado.date}</section>

        <footer>#FicaEmCasa <br />
        <span className="copy">Copyright ©2020 by Marcio Fernandes and Eduardo Batista Leite</span> </footer>
        </div>
    );
}


