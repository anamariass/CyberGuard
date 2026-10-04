
import "./telainicial.css";

function Telainicial() {
  return (
    <body>
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
   <div class="mb-3">
          <h1>Bem-vindo</h1>
          <h2>Acesse sua conta para começar</h2>
          

          
          
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email </label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite seu email"
  />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Senha </label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Digite sua senha"/>
</div>
          
</div>

            <button className="btn ">ENTRAR</button>

          <p className="cadastro">
            Não tem uma conta?{" "}
            <a href="#">Cadastre-se aqui</a>
          </p>
      </form>

    </main>

    </body>
  );
}




export default Telainicial
