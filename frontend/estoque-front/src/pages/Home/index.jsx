import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/foto-lixeira.jpg'
import Trashpng from '../../assets/lapis.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputId = useRef()
  const inputNome = useRef()
  const inputCategoria = useRef()
  const inputQuantidade = useRef()
  const inputPrecoUnitario = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/listar')

    setUsers(usersFromApi.data)

    console.log(users.data)
  }

  async function createUsers() {
    await api.post('/cadastrar', {
      id: inputId.current.value,
      nome: inputNome.current.value,
      categoria: inputCategoria.current.value,
      quantidade: inputQuantidade.current.value,
      preco_unitario: inputPrecoUnitario.current.value
    })

    getUsers()

  }

  async function deleteUsers(id) {
    await api.delete(`/excluir/${id}`)

    getUsers()
  }


  async function atualizarUsers(id) {
    await api.put(`/atualizar/${id}`, {
      nome: inputNome.current.value,
      categoria: inputCategoria.current.value,
      quantidade: inputQuantidade.current.value,
      preco_unitario: inputPrecoUnitario.current.value,
    });

    getUsers();
  }

  function preencherFormulario(user) {
    inputId.current.value = user.id;
    inputNome.current.value = user.nome;
    inputCategoria.current.value = user.categoria;
    inputQuantidade.current.value = user.quantidade;
    inputPrecoUnitario.current.value = user.preco_unitario;
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (

    <div className="container">
      <form>
        <h1>Cadrastro Estoque</h1>
        <input placeholder="ID" name="id" type="number" ref={inputId} />
        <input placeholder="Nome do Produto" name="nome do produto" type="text" ref={inputNome} />
        <input placeholder="Categoria" name="categoria" type="text" ref={inputCategoria} />
        <input placeholder="Quantidade" name="quantidade" type="number" ref={inputQuantidade} />
        <input placeholder="Preço Unitário" name="preço unitario" type="number" step="0.01" ref={inputPrecoUnitario} />
        <button type='button' onClick={createUsers}> Cadastrar </button>
      </form>


      {users.map(user => (

        <div key={user.id} className="card">
          <div>
            <p>id: <span>{user.id}</span></p>
            <p>nome: <span>{user.nome}</span></p>
            <p>categoria: <span>{user.categoria}</span></p>
            <p>quantidade: <span>{user.quantidade}</span></p>
            <p>preço_unitário: <span>{user.preco_unitario}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Lixeira" />
          </button>

          <button
            onClick={() => preencherFormulario(user)}
            className="atualizar-button"
          >
            <img src={Trashpng} alt="Lápis" />
          </button>


        </div>




      ))}


    </div>
  );
}
export default Home
