import "./menu.css";

function Menu({ onSair }) {

  return (
    <main className="dashboard">

      {/* MENU LATERAL */}

      <aside className="menu-lateral">

        {/* LOGO */}

        <div className="logo">

          <div className="logo-icone">
            🛡️
          </div>

          <h1>CyberGuard</h1>

        </div>


        {/* NAVEGAÇÃO */}

        <nav className="navegacao">

          <button className="item-menu ativo">
            <span>⌂</span>
            Início
          </button>

          <button className="item-menu">
            <span>▣</span>
            Estoque
          </button>

          <button className="item-menu">
            <span>▥</span>
            Relatório
          </button>

          <button className="item-menu">
            <span>⚙</span>
            Configurações
          </button>

        </nav>


        {/* SAIR */}

        <button className="item-menu sair" onClick={onSair}>
          <span>⏻</span>
          Sair
        </button>

      </aside>


      {/* ÁREA PRINCIPAL */}

      <section className="conteudo">

        <div className="cabecalho">

          <h2>Olá! Bem-vinda ao CyberGuard</h2>

          <p>
            Seja bem-vinda ao seu painel
          </p>

        </div>


        {/* CARDS */}

        <div className="cards">

          <div className="card">

            <div className="icone-card">
              +
            </div>

            <h3>Criar estoque</h3>

            <button>
              Criar agora
            </button>

          </div>


          <div className="card">

            <div className="icone-card">
              ▥
            </div>

            <h3>Relatório</h3>

            <button>
              Ver relatórios
            </button>

          </div>


          <div className="card">

            <div className="icone-card">
              ⚙
            </div>

            <h3>Configurações</h3>

            <button>
              Configurar
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Menu;