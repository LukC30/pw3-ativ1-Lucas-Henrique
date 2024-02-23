import { render } from "@testing-library/react";
import React from "react";


class Texto extends React.Component {
    constructor({...text}) {
        super(text)
        const texto = {
            titulo: "",
            autor: "",
            avaliacao: "",
            descricao: "" 
        };
        this.texto = text;
    }
    render(){
        return (
            <div>
            <h3>
                {this.texto.titulo}
            </h3>
            <p>
                {this.texto.autor} , {this.texto.avaliacao}
            </p>
            <p>
                {this.texto.descricao}
            </p>
            </div>
        );
    };

  
}

export default Texto;