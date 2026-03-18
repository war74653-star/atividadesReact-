

import './App.css'
import Atividade1 from './components/atividade1'

function App() {
  function mostrarMensagem(){
    alert("Bem-vindo ao React")
  }
 return (
  <div>
    <button onClick={mostrarMensagem}></button>
    <h1>Minha Primeira Aula </h1>
    <Atividade1/>
    
  </div>
 )
}
export default App