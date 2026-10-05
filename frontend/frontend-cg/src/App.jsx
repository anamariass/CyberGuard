import { useState } from 'react';

import Telainicial from './assets/pages/home/telainicial/telainicial';
import Menu from './assets/pages/menu/menu';

function App() {

  const [pagina, setPagina] = useState('login');

  function handleEntrar() {
    setPagina('menu');
  }

  function handleSair() {
    setPagina('login');
  }

  return (
    <>
      {pagina === 'login' && (
        <Telainicial onEntrar={handleEntrar} />
      )}

      {pagina === 'menu' && (
        <Menu onSair={handleSair} />
      )}
    </>
  );
}

export default App;