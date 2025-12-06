import './Versao.css';
import packageJson from '../../../package.json';

function Versao() {
  const versao = packageJson.version;
  const nomeProjeto = packageJson.name;

  return (
    <footer className="versao-container">
      <div className="versao-info">
        <span className="versao-projeto">{nomeProjeto}</span>
        <span className="versao-separador">•</span>
        <span className="versao-numero">v{versao}</span>
      </div>
      <p className="versao-texto">© 2025 IFCE - Campus Tauá</p>
    </footer>
  );
}

export default Versao;
