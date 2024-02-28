import '../App.css';


function Livro({fonte, alt}) {
        return (
            <div className="cardImagem">
                <img className='imagem' src={fonte} alt={alt}></img>   
            </div>
        );
    }


export default Livro;