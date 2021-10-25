import { useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Button } from "../../components/button";

import "./styles.scss";

export function RegisterPost() {
  const history = useHistory();

  function handleNavigatorHome() {
    history.push("/home");
  }

  function handleRegister() {
    history.push("/home");
  }
  return (
    <main className="home-container">
      <div className="home-content">
        <aside>
          <img src={logoImg} alt="Logo Be the hero" />
          <div>
            <h1>Cadastrar novo caso</h1>
            <p>
            Descreva o caso detalhadamente para <br/> encontrar um herói para resolver isso.
            </p>
          </div>

          <span onClick={handleNavigatorHome}>Voltar para a Home</span>
        </aside>

        <form>
          <input type="text" placeholder="Título do caso" />
          <textarea  placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />
          <Button onClick={handleRegister}> Cadastrar</Button>
        </form>
      </div>
    </main>
  );
}
