import './FerramentasIa.css';

function FerramentasIa() {
  const ferramentas = [
    {
      icone: '💬',
      nome: 'Assistentes conversacionais',
      descricao:
        'Modelos como o Claude e o ChatGPT ajudam a explicar conceitos, revisar textos e destravar problemas quando a documentação não é suficiente.',
    },
    {
      icone: '⌨️',
      nome: 'Programação assistida',
      descricao:
        'Ferramentas integradas ao editor sugerem trechos de código, geram testes e explicam funções legadas, reduzindo o tempo gasto em tarefas repetitivas.',
    },
    {
      icone: '🔍',
      nome: 'Pesquisa e síntese',
      descricao:
        'A IA resume artigos longos, compara fontes e organiza informação dispersa, acelerando a fase de levantamento de qualquer projeto acadêmico.',
    },
    {
      icone: '🎨',
      nome: 'Geração de mídia',
      descricao:
        'Imagens, áudio e vídeo produzidos por IA apoiam protótipos, apresentações e materiais didáticos sem depender de bancos de mídia externos.',
    },
  ];

  return (
    <section className="ferramentas-ia-container">
      <h2 className="ferramentas-ia-titulo">Ferramentas de Inteligência Artificial</h2>

      <p className="ferramentas-ia-introducao">
        Assim como o Git mudou a forma como versionamos código, as ferramentas de
        Inteligência Artificial estão mudando a forma como escrevemos, estudamos e
        resolvemos problemas. Nesta disciplina o objetivo não é decorar comandos de uma
        ferramenta específica, mas entender como usar a IA de maneira crítica dentro do
        seu próprio fluxo de trabalho.
      </p>

      <div className="ferramentas-ia-grid">
        {ferramentas.map((ferramenta) => (
          <article className="ferramenta-card" key={ferramenta.nome}>
            <span className="ferramenta-icone">{ferramenta.icone}</span>
            <h3 className="ferramenta-nome">{ferramenta.nome}</h3>
            <p className="ferramenta-descricao">{ferramenta.descricao}</p>
          </article>
        ))}
      </div>

      <p className="ferramentas-ia-nota">
        ⚠️ Lembre-se: a IA sugere, mas quem assina o trabalho é você. Todo resultado
        gerado precisa ser revisado, testado e citado — exatamente como fazemos com um
        commit antes de abrir um Pull Request.
      </p>
    </section>
  );
}

export default FerramentasIa;
