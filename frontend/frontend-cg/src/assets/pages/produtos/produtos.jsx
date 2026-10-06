import { useState, useRef, useEffect } from "react";
import './produto.css'
const trash = "/lixeiraProduto.svg";
const edit = "/editProduto.svg";

function Produtos({ onVoltar }) {

  const [produtos, setprodutos] = useState([])
  const [produtoEditando, setProdutoEditando] = useState(null)

  const inputNomeRef = useRef()
  const inputDescricaoRef = useRef()
  const inputCategoriaRef = useRef()
  const inputQuantidadeRef = useRef()
  const inputPrecoRef = useRef()
  const inputDataEntradaRef = useRef()


  async function getProdutos() {
    const produtosFromApi = await api.get('/produtos/listar')

    setprodutos(produtosFromApi.data)
    console.log(produtos)

  }

  async function createProdutos() {

    await api.post('/produtos/cadastrar', {

      nome: inputNomeRef.current.value,
      descricao: inputDescricaoRef.current.value,
      categoria: inputCategoriaRef.current.value,
      quantidade: Number(inputQuantidadeRef.current.value),
      preco: Number(inputPrecoRef.current.value),
      dataentrada: inputDataEntradaRef.current.value
    })

    getProdutos()

  }

  async function deleteProdutos(id) {
    await api.delete(`/produtos/excluir/${id}`);
    getProdutos();
  }


  useEffect(() => {
    getProdutos()
  }, [])

  function selecionarProduto(produto) {
    inputNomeRef.current.value = produto.nome
    inputDescricaoRef.current.value = produto.descricao
    inputCategoriaRef.current.value = produto.categoria
    inputQuantidadeRef.current.value = produto.quantidade
    inputPrecoRef.current.value = produto.preco
    inputDataEntradaRef.current.value =
      produto.dataentrada?.split('T')[0]

    setProdutoEditando(produto.id)
  }


  async function editProdutos() {

    await api.put(`/produtos/atualizar/${produtoEditando}`, {

      nome: inputNomeRef.current.value,
      descricao: inputDescricaoRef.current.value,
      categoria: inputCategoriaRef.current.value,
      quantidade: Number(inputQuantidadeRef.current.value),
      preco: Number(inputPrecoRef.current.value),
      dataentrada: inputDataEntradaRef.current.value

    })

    setProdutoEditando(null)

    getProdutos()
  }





  return (


    <div className='container'>

      <button
        className="produto-voltar"
        onClick={onVoltar}
      >
        ← Voltar ao menu
      </button>

      
<form
  onSubmit={(e) => {
    e.preventDefault();

    if (produtoEditando) {
      editProdutos();
    } else {
      createProdutos();
    }
  }}
>
  <h1>Cadastro de Produtos</h1>

  <label htmlFor="nome" className="sr-only">Nome do produto</label>
  <input
    id="nome"
    placeholder="Nome"
    name="nome"
    type="text"
    ref={inputNomeRef}
  />

  <label htmlFor="descricao" className="sr-only">Descrição do produto</label>
  <input
    id="descricao"
    placeholder="Descrição"
    name="descricao"
    type="text"
    ref={inputDescricaoRef}
  />

  <label htmlFor="categoria" className="sr-only">Categoria do produto</label>
  <input
    id="categoria"
    placeholder="Categoria"
    name="categoria"
    type="text"
    ref={inputCategoriaRef}
  />

  <label htmlFor="quantidade" className="sr-only">Quantidade do produto</label>
  <input
    id="quantidade"
    placeholder="Quantidade"
    name="quantidade"
    type="number"
    ref={inputQuantidadeRef}
  />

  <label htmlFor="preco" className="sr-only">Preço do produto</label>
  <input
    id="preco"
    placeholder="Preço"
    name="preco"
    type="number"
    ref={inputPrecoRef}
  />

  <label htmlFor="dataEntrada" className="sr-only">
    Data de entrada do produto
  </label>
  <input
    id="dataEntrada"
    placeholder="Data de entrada"
    name="dataEntrada"
    type="date"
    ref={inputDataEntradaRef}
  />

  <button type="submit">
    {produtoEditando ? "Salvar" : "Cadastrar"}
  </button>
</form>

      {produtos.map((produto) => (

        <div key={produto.id} className='card'>

          <div>
            <p> Nome: <span>{produto.nome}</span></p>
            <p> Descrição: <span> {produto.descricao} </span></p>
            <p> Quantidade: <span> {produto.quantidade} </span></p>
            <p> Preço: <span> {produto.preco} </span></p>
            <p>
              <strong>Data de entrada:</strong>{' '}
              {produto.dataentrada
                ? new Date(produto.dataentrada).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                : 'Não informada'}
            </p>
          </div>

          <div className='card-buttons'>
            <button onClick={() => deleteProdutos(produto.id)}>
              <img src={trash} alt="Excluir produto" />
            </button>
            <button onClick={() => selecionarProduto(produto)}>
              <img
                src={edit}
                alt="Editar produto"
                style={{ width: '25px', height: '25px', objectFit: 'contain' }}
              />
            </button>
          </div>
        </div>

      ))}






    </div>

  )

}



export default Produtos;
