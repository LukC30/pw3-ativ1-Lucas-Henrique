import { render } from "@testing-library/react";
import React from "react";
import { Card } from "bootstrap-react";

function Texto({ titulo, autor, linkAutor, tipoLivro,  descricao}) {
    
    return(
    <div className="divTexto">
        <h2 className="tituloLivro">
            {titulo}
        </h2>
        <p className="autor">feito por <a  className="links"href={linkAutor}>{autor}</a></p>
        <hr className="hr"></hr>
        <p className="descricao">
            {descricao}
        </p>
    </div>
    );
}

export default Texto;