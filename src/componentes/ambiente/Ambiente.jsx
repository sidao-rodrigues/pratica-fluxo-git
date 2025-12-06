import './Ambiente.css';

function Ambiente() {
  const ambiente = import.meta.env.VITE_AMBIENTE || 'DEV';
  const isProd = ambiente === 'PROD';

  return (
    <div className={`ambiente-container ${isProd ? 'ambiente-prod' : 'ambiente-dev'}`}>
      <div className="ambiente-badge">
        <span className="ambiente-label">Ambiente:</span>
        <span className="ambiente-valor">{ambiente}</span>
      </div>
      <p className="ambiente-descricao">
        {isProd 
          ? '🚀 Você está no ambiente de PRODUÇÃO' 
          : '🔧 Você está no ambiente de DESENVOLVIMENTO'}
      </p>
    </div>
  );
}

export default Ambiente;
