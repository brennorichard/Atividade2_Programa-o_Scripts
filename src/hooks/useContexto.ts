import { useContext } from "react";
import { Contexto } from "../contexts/Contexto";

function useContexto() {
    const contexto = useContext(Contexto);
    return contexto;
}

export default useContexto;