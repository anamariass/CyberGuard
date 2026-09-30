import './login.css'

function Login({ onLogin }) {

  function entrar(event) {
    event.preventDefault()

    if (onLogin) {
      onLogin()
    }
  }

  return (
    <main className="tela-login">

      <section className="imagem">

        <div className="texto-imagem">
          <strong>
            Organize seu
            <br />
            estoque
          </strong>

          <span>
            com
            <br />
            facilidade
          </span>
        </div>

      </section>

      <section className="lado-direito">

        <div className="login-box">

          <h1>Bem-vindo</h1>

          <h2>
            Acesse sua conta para começar
          </h2>

          <form onSubmit={entrar}>

            <div className="campo">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="senha">
                Senha
              </label>

              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <button
              type="submit"
              className="botao-entrar"
            >
              ENTRAR
            </button>

          </form>

          <p className="cadastro">
            Não tem uma conta?
            <a href="#">
              Cadastre-se aqui
            </a>
          </p>

        </div>

      </section>

    </main>
  )
}

export default Login