import logo from './logo.svg';
import './App.css';
import vol1 from './images/jojomanga1.png';
import Livro from './components/livro';
import Texto from './components/Texto'
const alt = ["capa vol 1 de jojo golden wind", "capa vol 2 de jojo golden wind", "capa vol 3 de jojo golden wind"]

function App() {
  const texto = {
    titulo: "",
    autor: "",
    avaliacao: "",
    descricao: "" 
}

  return (
    <div className="App">
      <Livro
      fonte={vol1}
      alt ={alt[0]} 
      />
      <Texto
      titulo={"Jojo golden wind"}
      descricao={"Koichi Hirose viaja à Itália em busca de Haruno Shiobana, o suposto filho de Dio. Ao chegar lá, um garoto loiro que se diz chamar Giorno Giovanna rouba sua bagagem... A estranha semelhança na pronúncia dos nomes e certa demonstração de poder podem indicar que Giorno e Haruno são a mesma pessoa!"}
      />
    </div>
  );
}

export default App;
