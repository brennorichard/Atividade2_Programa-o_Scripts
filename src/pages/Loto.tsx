import React from "react";
import { useContexto } from "../hooks";
import Nav from "../components/navbar";

function Lotofacil(){

    const {lotofacil} = useContexto();

    return (
    <>
      {lotofacil.numeroDoConcurso ?
    <div id="homebody"> 
        <Nav/>
        <div id="divboxesq">
            <table>
                <div id="imagelot">
                          <img src="/assets/trevo-lotofacil.png"  style={{ marginRight: '10px' }}  /> 
                          <td id="tituloloto">Lotofacil</td>
                </div>
                <div id="space"></div>
                <tr>
                    <td>Estimativa do prêmio do próximo <br/> concurso. Sorteio em {lotofacil.dataProximoConcurso}:</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td id="td-valor-loto">R$ {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR')}</td>
                </tr>
            </table>
        </div>
        
        <div id="divboxdir">
            <table>
                <tr>
                <td>{lotofacil.dezenas.map((dezena, index) => (
                            <React.Fragment key={index}>
                    <td id="dezenasloto">{dezena}</td>
                    {(index + 1) % 5 === 0 && <br />}
                    </React.Fragment>
                ))}</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td id ="txtganhadores">{lotofacil.quantidadeGanhadores} GANHADORES</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td>Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso} </td>
                </tr>
            </table>
        </div>
    </div>
    :
    <div> Carregando... </div>}</>
    )
}

export default Lotofacil;