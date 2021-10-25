import logoImg from "../../assets/logo.svg";
import { Button } from "../../components/button";

import { useHistory } from "react-router-dom";

import "./styles.scss";

export function Register() {
  const history = useHistory();

  function handleRegister() {
    history.push("/home");
  }


  function handleNavigatorLogin() {
    history.push("/");
  }
  return (
    <main className="home-container">
      <div className="home-content">
        <aside>
          <img src={logoImg} alt="Logo Be the hero" />
          <div>
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude <br /> pessoas a
              encontrarem os casos da sua ONG.
            </p>
          </div>

          <span onClick={handleNavigatorLogin}>Voltar para o Login</span>
        </aside>

        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Número" />
          <div className="form-adress">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>

          <Button onClick={handleRegister}> Cadastrar</Button>
        </form>
      </div>
    </main>
  );
}
