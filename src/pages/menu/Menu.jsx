import './Menu.css';

function Menu({ onLogout }) {
  return (
    <div className="menu-container">

      <header className="menu-header">
        <h1>CyberGuard</h1>

        <button onClick={onLogout} className="logout-button">
          Sair
        </button>
      </header>

      <main className="menu-content">
        <h2>Menu Principal</h2>
        <p>Escolha uma opção:</p>

        <div className="menu-cards">

          <div className="menu-card">
            <h3>Produtos</h3>
            <p>Cadastre e visualize os produtos.</p>
            <button>Entrar</button>
          </div>

          <div className="menu-card">
            <h3>Fornecedores</h3>
            <p>Cadastre e visualize os fornecedores.</p>
            <button>Entrar</button>
          </div>

          <div className="menu-card">
            <h3>Estoque</h3>
            <p>Consulte as informações do estoque.</p>
            <button>Entrar</button>
          </div>

        </div>
      </main>

    </div>
  );
}

export default Menu;