const TabelaAdmin = ({ itens, onDeletar, labelBotao }) => {
  return (
    <div className="tabela-admin-wrapper">
      <div className="tabela-admin-acoes-topo">
        <button className="btn-add-admin">
          <img src="/src/img/icon-add.svg" width="16" height="16" alt="Adicionar" className="icon-branco" />
          {labelBotao}
        </button>
      </div>

      <table className="tabela-admin">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Tamanho</th>
            <th>Criado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.id} className="tabela-admin-linha">
              <td>
                <div className="tabela-admin-nome">
                  <img src="/src/img/icon-dos-contex.svg" width="16" height="16" alt="arquivo" className="icon-cinza" />
                  {item.nome}
                </div>
              </td>
              <td>{item.categoria}</td>
              <td>{item.tamanho}</td>
              <td>{item.criado}</td>
              <td>
                <div className="tabela-admin-botoes">
                  <button className="btn-action">
                    <img src="/src/img/icon-lapis.svg" width="15" height="15" alt="Editar" className="icon-cinza" />
                  </button>
                  <button className="btn-action trash" onClick={() => onDeletar(item.id)}>
                    <img src="/src/img/icon-lixeira.svg" width="15" height="15" alt="Deletar" className="icon-vermelho" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaAdmin;
