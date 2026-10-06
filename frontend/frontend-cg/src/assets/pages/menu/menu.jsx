import "./menu.css";

function Menu({ onSair, onFornecedores, onEstoque, onProdutos }) {

  return (
    <main className="dashboard">

      {/* MENU LATERAL */}
      <aside className="menu-lateral">

        {/* LOGO */}
        <div className="logo">
          <div className="logo-icone">🛡️</div>
          <h1>CyberGuard</h1>
        </div>

        {/* NAVEGAÇÃO */}
        <nav className="navegacao">

          <button className="item-menu ativo">
            <span>🏠</span>
            Início
          </button>

          <button
            className="item-menu"
            onClick={onEstoque}
          >
            <span>📦</span>
            Estoque
          </button>

          <button
            className="item-menu"
            onClick={onProdutos}
          >
            <span>🖥️</span>
            Produtos
          </button>

          <button
            className="item-menu"
            onClick={onFornecedores}
          >
            <span>🚛</span>
            Fornecedores
          </button>

        </nav>

        {/* SAIR */}
        <button
          className="item-menu sair"
          onClick={onSair}
        >
          <span>⏻</span>
          Sair
        </button>

      </aside>


      {/* CONTEÚDO */}
      <section className="conteudo">

        {/* CABEÇALHO */}
        <div className="cabecalho">

          <h2>Olá! Bem-vinda ao CyberGuard</h2>

          <p>Seja bem-vinda ao seu painel</p>

        </div>


        {/* CARDS */}
        <div className="cards">

          {/* CARD ESTOQUE */}
          <div className="menu-card">

            <div className="icone-card">+</div>

            <h3>Criar estoque</h3>

            <button onClick={onEstoque}>
              Criar agora
            </button>

          </div>


          {/* CARD PRODUTOS */}
          <div className="menu-card">

            <div className="icone-card">▥</div>

            <h3>Produtos</h3>

            <button onClick={onProdutos}>
              Criar produtos
            </button>

          </div>


          {/* CARD FORNECEDORES */}
          <div className="menu-card">

            <div className="icone-card">▣</div>

            <h3>Fornecedores</h3>

            <button onClick={onFornecedores}>
              Ver fornecedores
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Menu;