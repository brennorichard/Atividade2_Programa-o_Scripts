import Nav from "../components/navbar";
import { useContexto } from "../hooks";

function Megasena(){

    const {megasena} = useContexto();

    return (
        <>
        {megasena.numeroDoConcurso ?
        <div id="homebody">
            <Nav/>
            <div id="divboxesq">
                <table>
                <div id="imagelot">
                          <img src="/assets/trevo-megasena.png"  style={{ marginRight: '10px' }}  /> 
                          <td id="titulomega">Mega-Sena</td>
                        </div>
                        <div id="space"></div>
                    <tr>
                        <td>Estimativa do prêmio do próximo <br/> concurso. Sorteio em {megasena.dataProximoConcurso}:</td>
                    </tr>
                    <div id="space"></div>
                    <tr>
                        <td id="valormega">R$ {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })}</td>
                    </tr>
                </table>
            </div>

            <div id="divboxdir">
                <tr>
                    <td>{megasena.dezenas.map( dezena => ( <td id="dezenasmega" > {dezena} </td>))}</td>
                </tr>
                <div id="space"></div>
                <tr>
                <td id ="txtganhadores">{megasena.quantidadeGanhadores} GANHADORES</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td>Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}</td>
                </tr>
           </div>
        </div>
         :
         <div> Carregando... </div>}</>
    )
}

export default Megasena;