import logoImg from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

import { Button } from "../../components/button";


import { useHistory } from "react-router-dom";

import "./styles.scss";

export function Login() {
  const history = useHistory();

  function handleNavigatorRegister() {
    history.push("/register");
  }

  function handleLogin() {
    history.push("/home");
    
  }

  return (
    <main className="container">
      <aside>
        <img src={logoImg} alt="Logo Be the hero" />
        <form>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="Nome" />
          <Button onClick={handleLogin}>Entrar</Button>
          <span onClick={handleNavigatorRegister}> Não tenho cadastro</span>
        </form>
      </aside>
      <div>
        <img src={heroes} alt="Heroes" />
      </div>
    </main>
  );
}
