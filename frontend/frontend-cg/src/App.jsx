import { useState } from "react";

import Telainicial from "./assets/pages/telainicial/telainicial";
import Menu from "./assets/pages/menu/menu";
import Estoque from "./assets/pages/estoque/estoque";
import Fornecedor from "./assets/pages/fornecedor/fornecedor";
import Produtos from "./assets/pages/produtos/produtos";

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

  function handleProdutos() {
    setPagina("produtos");
  }

  function handleVoltar() {
    setPagina("menu");
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
          onProdutos={handleProdutos}
        />
      )}

      {pagina === "fornecedor" && (
        <Fornecedor onVoltar={handleVoltar} />
      )}

      {pagina === "estoque" && (
        <Estoque onVoltar={handleVoltar} />
      )}

      {pagina === "produtos" && (
        <Produtos onVoltar={handleVoltar} />
      )}
    </>
  );
}

export default App;