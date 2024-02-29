import { render } from "@testing-library/react";
import React from "react";
import { Card } from "bootstrap-react";

function Texto({ titulo, autor, linkAutor, tipoLivro,  descricao}) {
    
    return(
    <div className="divTexto">
        <h2 className="tituloLivro">
            {titulo} <span className="tipoLivro">{tipoLivro}</span>
        </h2> <br/>
        <p className="autor">Feito por <a  className="links"href={linkAutor}>{autor}</a></p>
        <br/>
        <hr className="hr"></hr>
        <br/>
        <p className="descricao">
            {descricao}
        </p>
    </div>
    );
}

export default Texto;