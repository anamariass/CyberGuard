import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.png'
import Editar from '../../assets/editar.png'
import crud from '../../services/crud'

function Home() {

  const [users, setUsers] = useState([])
  const [editId, setEditId] = useState(null)

  const inputName = useRef()
  const inputCnpj = useRef()
  const inputTelefone = useRef()
  const inputEmail = useRef()
  const inputEndereco = useRef()


  async function getUsers() {
    try {
      const usersFromCrud = await crud.get('/fornecedores')
      setUsers(usersFromCrud.data)

    } catch (erro) {
      console.error('Erro ao buscar fornecedores:', erro)
    }
  }

  function editUser(user) {
    inputName.current.value = user.nome
    inputCnpj.current.value = user.cnpj
    inputTelefone.current.value = user.telefone
    inputEmail.current.value = user.email
    inputEndereco.current.value = user.endereco

    setEditId(user.id)
  }

  async function createUsers() {
    try {

      if (editId) {

        await crud.put(`/fornecedores/${editId}`, {
          nome: inputName.current.value,
          cnpj: inputCnpj.current.value,
          telefone: inputTelefone.current.value,
          email: inputEmail.current.value,
          endereco: inputEndereco.current.value
        })

      } else {

        await crud.post('/fornecedores', {
          nome: inputName.current.value,
          cnpj: inputCnpj.current.value,
          telefone: inputTelefone.current.value,
          email: inputEmail.current.value,
          endereco: inputEndereco.current.value
        })

      }

      await getUsers()

      inputName.current.value = ''
      inputCnpj.current.value = ''
      inputTelefone.current.value = ''
      inputEmail.current.value = ''
      inputEndereco.current.value = ''

      setEditId(null)

    } catch (erro) {
      console.error('Erro ao cadastrar fornecedor:', erro)
    }
  }

  async function deleteUsers(id) {
    try {

      await crud.delete(`/fornecedores/${id}`)

      await getUsers()

    } catch (erro) {
      console.error('Erro ao excluir fornecedor:', erro)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>

      <form>
        <h1>Cadastro de Fornecedores</h1>

        <input placeholder='Nome' type='text' ref={inputName} />
        <input placeholder='CNPJ' type='text' ref={inputCnpj} />
        <input placeholder='Telefone' type='text' ref={inputTelefone} />
        <input placeholder='Email' type='email' ref={inputEmail} />
        <input placeholder='Endereço' type='text' ref={inputEndereco} />


        <button type='button' onClick={createUsers}>
          {editId ? 'Salvar Alterações' : 'Cadastrar'}
        </button>

      </form>
      {users.map(user => (
        <div key={user.id} className="card">

          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>CNPJ: <span>{user.cnpj}</span></p>
            <p>Telefone: <span>{user.telefone}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Endereço: <span>{user.endereco}</span></p>
          </div>


          <div className="acoes">

            <button
              className="editar" onClick={() => editUser(user)}>
                <img src={Editar} alt="Editar"/>
            </button>


            <button
              className="excluir" onClick={() => deleteUsers(user.id)}>
              <img src={Lixeira} alt="Excluir"/>
            </button>

          </div>

        </div>
      ))}

    </div>
  )
}

export default Home