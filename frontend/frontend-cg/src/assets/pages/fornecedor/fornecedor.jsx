import { useEffect, useRef, useState } from 'react'
import api from "../../../api";
import './fornecedor.css'

const Lixeira = "/foto-lixeiraFornecedor.png"
const Editar = "/editarFornecedor.png"

function Fornecedor({ onVoltar }) {

  const [users, setUsers] = useState([])
  const [editId, setEditId] = useState(null)

  const inputName = useRef(null)
  const inputCnpj = useRef(null)
  const inputTelefone = useRef(null)
  const inputEmail = useRef(null)
  const inputEndereco = useRef(null)

  async function getUsers() {
    try {
      const usersFromCrud = await api.get('/fornecedores')
      setUsers(usersFromCrud.data)

    } catch (erro) {
      console.error('Erro ao buscar fornecedores:', erro)
    }
  }

  function limparFormulario() {
    inputName.current.value = ''
    inputCnpj.current.value = ''
    inputTelefone.current.value = ''
    inputEmail.current.value = ''
    inputEndereco.current.value = ''

    setEditId(null)
  }

  function editUser(user) {
    inputName.current.value = user.nome || ''
    inputCnpj.current.value = user.cnpj || ''
    inputTelefone.current.value = user.telefone || ''
    inputEmail.current.value = user.email || ''
    inputEndereco.current.value = user.endereco || ''

    setEditId(user.id)

    inputName.current.focus()
  }

  async function createUsers(event) {
    event.preventDefault()

    const fornecedor = {
      nome: inputName.current.value.trim(),
      cnpj: inputCnpj.current.value.trim(),
      telefone: inputTelefone.current.value.trim(),
      email: inputEmail.current.value.trim(),
      endereco: inputEndereco.current.value.trim()
    }

    try {
      if (editId !== null) {
        await api.put(
          `/fornecedores/${editId}`,
          fornecedor
        )
      } else {
        await api.post(
          '/fornecedores',
          fornecedor
        )
      }

      await getUsers()

      limparFormulario()

      inputName.current.focus()

    } catch (erro) {
      console.error(
        'Erro ao salvar fornecedor:',
        erro
      )
    }
  }

  async function deleteUsers(id, nome) {
    const confirmou = window.confirm(
      `Deseja realmente excluir o fornecedor ${nome}?`
    )

    if (!confirmou) {
      return
    }

    try {
      await api.delete(`/fornecedores/${id}`)

      await getUsers()

    } catch (erro) {
      console.error(
        'Erro ao excluir fornecedor:',
        erro
      )
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <main className="container">

      <button
        type="button"
        className="fornecedor-voltar"
        onClick={onVoltar}
      >
        <span aria-hidden="true">←</span>
        <span>Voltar ao menu</span>
      </button>

      <form
        onSubmit={createUsers}
        aria-labelledby="titulo-fornecedor"
      >

        <h1 id="titulo-fornecedor">
          Cadastro de Fornecedores
        </h1>

        <div className="campo">
          <label htmlFor="nome">
            Nome
          </label>

          <input
            id="nome"
            name="nome"
            type="text"
            ref={inputName}
            placeholder="Digite o nome do fornecedor"
            autoComplete="organization"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="cnpj">
            CNPJ
          </label>

          <input
            id="cnpj"
            name="cnpj"
            type="text"
            ref={inputCnpj}
            placeholder="Digite o CNPJ"
            inputMode="numeric"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="telefone">
            Telefone
          </label>

          <input
            id="telefone"
            name="telefone"
            type="tel"
            ref={inputTelefone}
            placeholder="Digite o telefone"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="email">
            E-mail
          </label>

          <input
            id="email"
            name="email"
            type="email"
            ref={inputEmail}
            placeholder="Digite o e-mail"
            autoComplete="email"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="endereco">
            Endereço
          </label>

          <input
            id="endereco"
            name="endereco"
            type="text"
            ref={inputEndereco}
            placeholder="Digite o endereço"
            autoComplete="street-address"
            required
          />
        </div>

        <button
          type="submit"
          className="botao-submit"
        >
          {editId !== null
            ? 'Salvar alterações'
            : 'Cadastrar fornecedor'}
        </button>

      </form>

      <section
        className="lista-fornecedores"
        aria-labelledby="titulo-lista"
      >

        <h2 id="titulo-lista">
          Fornecedores cadastrados
        </h2>

        {users.length === 0 ? (

          <p className="nenhum-fornecedor">
            Nenhum fornecedor cadastrado.
          </p>

        ) : (

          users.map(user => (

            <article
              key={user.id}
              className="card"
            >

              <div className="dados-fornecedor">

                <p>
                  <strong>Nome:</strong>
                  <span>{user.nome}</span>
                </p>

                <p>
                  <strong>CNPJ:</strong>
                  <span>{user.cnpj}</span>
                </p>

                <p>
                  <strong>Telefone:</strong>
                  <span>{user.telefone}</span>
                </p>

                <p>
                  <strong>E-mail:</strong>
                  <span>{user.email}</span>
                </p>

                <p>
                  <strong>Endereço:</strong>
                  <span>{user.endereco}</span>
                </p>

              </div>

              <div
                className="acoes"
                aria-label={`Ações para ${user.nome}`}
              >

                <button
                  type="button"
                  className="editar"
                  onClick={() => editUser(user)}
                  aria-label={`Editar fornecedor ${user.nome}`}
                  title={`Editar fornecedor ${user.nome}`}
                >
                  <img
                    src={Editar}
                    alt=""
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  className="excluir"
                  onClick={() =>
                    deleteUsers(user.id, user.nome)
                  }
                  aria-label={`Excluir fornecedor ${user.nome}`}
                  title={`Excluir fornecedor ${user.nome}`}
                >
                  <img
                    src={Lixeira}
                    alt=""
                    aria-hidden="true"
                  />
                </button>

              </div>

            </article>

          ))

        )}

      </section>

    </main>
  )
}

export default Fornecedor