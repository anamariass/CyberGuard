import { useState } from "react";

import Login from "./pages/Home/pagina-inicial/login/login";
import Menu from "./pages/menu/Menu";
import Produto from "./pages/produtos/produto";

function App() {
  const [tela, setTela] = useState('login')

  if (tela === 'login') {
    return <Login onLogin={() => setTela('menu')} />
  }

  if (tela === 'menu') {
    return (
      <Menu
        onProdutos={() => setTela('produto')}
        onLogout={() => setTela('login')}
      />
    )
  }

  if (tela === 'produto') {
    return (
      <Produto
        onVoltar={() => setTela('menu')}
      />
    )
  }
}

export default App