import './App.css'
import Titulo from './componentes/titulo/Titulo'
import Paragrafo from './componentes/paragrafo/Paragrafo'
import Ambiente from './componentes/ambiente/Ambiente'
import Desenvolvedor from './componentes/desenvolvedor/Desenvolvedor'
import Versao from './componentes/versao/Versao'

function App() {
  return (
    <div className="app-container">
      <Titulo />
      <Paragrafo />
      <Ambiente />
      <Desenvolvedor />
      <Versao />
    </div>
  )
}

export default App
