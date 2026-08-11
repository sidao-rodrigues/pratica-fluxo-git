import './App.css'
import Titulo from './componentes/titulo/Titulo'
import Paragrafo from './componentes/paragrafo/Paragrafo'
import Ambiente from './componentes/ambiente/Ambiente'
import Desenvolvedor from './componentes/desenvolvedor/Desenvolvedor'
import Versao from './componentes/versao/Versao'
import Paragrafo2 from './componentes/paragrafo2/Paragrafo2'
import FerramentasIa from './componentes/ferramentasIa/FerramentasIa'

function App() {
  return (
    <div className="app-container">
      <Titulo />
      <Paragrafo />
      <Paragrafo2 />
      <FerramentasIa />
      <Ambiente />
      <Desenvolvedor />
      <Versao />
    </div>
  )
}

export default App
