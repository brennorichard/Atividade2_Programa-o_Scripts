import Nav from "../components/navbar";
import { useContexto } from "../hooks";

function Quina(){

    const {quina} = useContexto();

    return (
        <>
        {quina.numeroDoConcurso ?
        <div id="homebody">
            <Nav/>
            
            <div id="divboxesq">
                <table >
                        <div id="imagelot">
                        <img src="/assets/trevo-quina.png"  style={{ marginRight: '10px' }}  /> 
                          <td id="tituloquina">QUINA</td>
                        </div>
                        <div id="space"></div>
                    <tr>
                        <td id="datconc">Estimativa do prêmio do próximo <br/> concurso. Sorteio em {quina.dataProximoConcurso}:</td>
                    </tr>
                    <div id="space"></div>
                    <tr>
                        <td id="valorquina">R$ {quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                </table>
            </div>

            <div id="divboxdir">
                <tr>
                    <td id="bolds">{quina.dezenas.map( dezena => ( <td id="dezenasquina" > {dezena} </td>))}</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td id ="txtganhadores">{quina.quantidadeGanhadores} GANHADORES</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td id="datc">Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}</td>
                </tr>
           </div>
        </div> :
    <div> Carregando... </div>}</>
    )
    
}

export default Quina;