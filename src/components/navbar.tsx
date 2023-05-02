import { Link } from "react-router-dom";
import { useContexto } from "../hooks";
import { useEffect, useState } from "react";

function Nav(){

    const [activate,setActivate]=useState('');

    useEffect(()=>{
    const path = window.location.pathname;
    if (path === '/Loto'){
        setActivate('Loto')
    }
    if (path === '/Mega'){
        setActivate('Mega')
    }
    if (path === '/Quina'){
        setActivate('Quina')
    }
    
    }
    )


    return (
        <div>
            <Link to="/Loto"  id={activate=== 'Loto' ? 'ativado' : 'td-valor-loto'} style={{ fontWeight: 'bold', marginRight:'5px', fontSize:'20px'}}> Lotofácil  
            </Link>
            <Link to="/Mega" id={activate=== 'Mega' ? 'ativado' : 'td-valor-mega'} style={{ fontWeight: 'bold', marginRight:'5px', fontSize:'20px'}}> MegaSena  
            </Link>
            <Link to="/Quina" id={activate=== 'Quina' ? 'ativado' : 'td-valor-quina'} style={{ fontWeight: 'bold', fontSize:'20px'}}> Quina
            </Link>
        </div>
    )
}

export default Nav;