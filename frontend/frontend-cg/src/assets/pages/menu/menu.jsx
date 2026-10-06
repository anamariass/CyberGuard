import "./menu.css";

function Menu({ onSair, onFornecedores, onEstoque }) {
  return (
    <main className="dashboard">

      <aside className="menu-lateral">

        <div className="logo">
          <div className="logo-icone">🛡️</div>
          <h1>CyberGuard</h1>
        </div>

        <nav className="navegacao">

          <button className="item-menu ativo">
            <span>⌂</span>
            Início
          </button>

          <button
            className="item-menu"
            onClick={onEstoque}
          >
            <span>▣</span>
            Estoque
          </button>

          <button className="item-menu">
            <span>▥</span>
            Relatório
          </button>

          <button
            className="item-menu"
            onClick={onFornecedores}
          >
            <span>🏢</span>
            Fornecedores
          </button>

        </nav>

        <button
          className="item-menu sair"
          onClick={onSair}
        >
          <span>⏻</span>
          Sair
        </button>

      </aside>

      <section className="conteudo">

        <div className="cabecalho">
          <h2>Olá! Bem-vinda ao CyberGuard</h2>
          <p>Seja bem-vinda ao seu painel</p>
        </div>

        <div className="cards">

          {/* CARD ESTOQUE */}
          <div className="card">

            <div className="icone-card">+</div>

            <h3>Criar estoque</h3>

            <button onClick={onEstoque}>
              Criar agora
            </button>

          </div>

          {/* CARD RELATÓRIO */}
          <div className="card">

            <div className="icone-card">▥</div>

            <h3>Relatório</h3>

            <button>
              Ver relatórios
            </button>

          </div>

          {/* CARD FORNECEDORES */}
          <div className="card">

            <div className="icone-card">🏢</div>

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