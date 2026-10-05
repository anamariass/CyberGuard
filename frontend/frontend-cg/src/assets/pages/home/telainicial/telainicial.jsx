import "./telainicial.css";

function Telainicial({ onEntrar }) {

  return (
    <main className="tela-login">

      <section className="imagem">

        <div className="texto-imagem">

          <strong>
            <h1>
              Organize seu <br />
              estoque <span>com</span> <br />
              <span>facilidade</span>
            </h1>
          </strong>

          <img src="/FotoTelai.jpeg" alt="Estoque" />

        </div>

      </section>

      <form>

        <div className="mb-3">

          <h1>Bem-vindo</h1>

          <h2>Acesse sua conta para começar</h2>

          <br />

          <div className="mb-3">

            <label
              htmlFor="email"
              className="form-label"
            >
              Email
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite seu email"
            />

          </div>

          <br />

          <div className="mb-3">

            <label
              htmlFor="senha"
              className="form-label"
            >
              Senha
            </label>

            <input
              type="password"
              className="form-control"
              id="senha"
              placeholder="Digite sua senha"
            />

          </div>

        </div>

        <br />

        <button
          type="button"
          className="btn"
          onClick={onEntrar}
        >
          ENTRAR
        </button>

        <br />
        <br />

        <p className="cadastro">
          Não tem uma conta?{" "}
          <a href="#">
            Cadastre-se aqui
          </a>
        </p>

      </form>

    </main>
  );
}

export default Telainicial;