import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";import Mega from "../pages/Mega";
import Quina from "../pages/Quina";
import Lotofacil from "../pages/Loto";
import Home from "../pages/Home";

function Rotas() {

 
return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/mega" element={<Mega />} />
         <Route path="/loto" element={<Lotofacil />} />
         <Route path="/quina" element={<Quina />} />
        </Routes>
    </BrowserRouter>
    );
    }
    
    export default Rotas;
