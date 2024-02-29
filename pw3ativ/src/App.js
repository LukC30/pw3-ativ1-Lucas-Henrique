import logo from './logo.svg';
import './App.css';
import vol1 from './images/jojomanga1.png';
import Livro from './components/livro';
import Texto from './components/Texto'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const alt = ["capa vol 1 de jojo golden wind", "capa vol 2 de jojo golden wind", "capa vol 3 de jojo golden wind"]

function App() {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col style={{display: 'flexbox'}}>
      <Livro
      fonte={vol1}
      alt ={alt[0]} 
      />
     </Col>
     <Col style={{display: 'flexbox'}}>
      <Texto
      titulo={"Jojo's Bizarre Adventure Parte 5: Golden Wind Vol. 01"}
      tipoLivro={"Capa comum - 25 agosto 2023"}
      linkAutor={ "https://pt.wikipedia.org/wiki/Hirohiko_Araki" }
      autor={"Hirohiko araki"}
      descricao={"Koichi Hirose viaja à Itália em busca de Haruno Shiobana, o suposto filho de Dio. Ao chegar lá, um garoto loiro que se diz chamar Giorno Giovanna rouba sua bagagem... A estranha semelhança na pronúncia dos nomes e certa demonstração de poder podem indicar que Giorno e Haruno são a mesma pessoa!"}
      />
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
