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
                          <td id="titulomega">MEGA-SENA</td>
                        </div>
                        <div id="space"></div>
                    <tr>
                        <td id="datconc">Estimativa do prêmio do próximo <br/> concurso. Sorteio em {megasena.dataProximoConcurso}:</td>
                    </tr>
                    <div id="space"></div>
                    <tr>
                        <td id="valormega">R$ {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                </table>
            </div>

            <div id="divboxdir">
                <tr>
                    <td id="bolds">{megasena.dezenas.map( dezena => ( <td id="dezenasmega" > {dezena} </td>))}</td>
                </tr>
                <div id="space"></div>
                <tr>
                <td id ="txtganhadores">{megasena.quantidadeGanhadores} GANHADORES</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td id="datc">Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}</td>
                </tr>
           </div>
        </div>
         :
         <div> Carregando... </div>}</>
    )
}

export default Megasena;