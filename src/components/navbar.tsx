import { Link } from "react-router-dom";
import { useContexto } from "../hooks";

function Nav(){


    return (
        <div>
            <Link to="/Loto" id="valorloto"style={{ fontWeight: 'bold', marginRight:'5px', fontSize:'20px'}}> Lotofácil  
            </Link>
            <Link to="/Mega" id="valormega" style={{ fontWeight: 'bold', marginRight:'5px', fontSize:'20px'}}> MegaSena  
            </Link>
            <Link to="/Quina" id="valorquina"style={{ fontWeight: 'bold', fontSize:'20px'}}> Quina
            </Link>
        </div>
    )
}

export default Nav;