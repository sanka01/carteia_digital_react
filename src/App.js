import './App.css';
import Tabela from './components/Tabela';
import './styles/tabela.css';
function App() {
  return (
    <div className="App">
      <div className="grid-2">
        <div className="div-tabela">
          <h1>Tabela de gastos</h1>
          <Tabela dados="gastos"/>
        </div>
        <div className="div-tabela">
          <h1>Tabela de saldo</h1>
          <Tabela dados="saldo"/>
        </div>
      </div>
    </div>
    );
  }
  
  export default App;
  