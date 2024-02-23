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
      {...texto}
      />
    </div>
  );
}

export default App;
