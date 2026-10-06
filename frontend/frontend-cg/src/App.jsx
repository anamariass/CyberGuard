import { useState } from "react";

import Telainicial from "./assets/pages/telainicial/telainicial";
import Menu from "./assets/pages/menu/menu";
import Estoque from "./assets/pages/estoque/estoque";
import Fornecedor from "./assets/pages/fornecedor/fornecedor";

function App() {
  const [pagina, setPagina] = useState("login");

  function handleEntrar() {
    setPagina("menu");
  }

  function handleSair() {
    setPagina("login");
  }

  function handleFornecedores() {
    setPagina("fornecedor");
  }

  function handleEstoque() {
    setPagina("estoque");
  }

  return (
    <>
      {pagina === "login" && (
        <Telainicial onEntrar={handleEntrar} />
      )}

      {pagina === "menu" && (
        <Menu
          onSair={handleSair}
          onFornecedores={handleFornecedores}
          onEstoque={handleEstoque}
        />
      )}

      {pagina === "fornecedor" && (
        <Fornecedor />
      )}

      {pagina === "estoque" && (
        <Estoque />
      )}
    </>
  );
}

export default App;