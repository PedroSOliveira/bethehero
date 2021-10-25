import logoImg from "../../assets/logo.svg";
import { Button } from "../../components/button";
import { FiPower } from "react-icons/fi";

import { useHistory } from "react-router-dom";

import "./styles.scss";
import { Post } from "../../components/post";

export function Home() {
  const history = useHistory();

  function handleNavigatorRegisterPost() {
    history.push("/register-post");
  }

  function handleLogout() {
    history.push("/");
  }

  return (
    <div>
      <header>
        <div className="header-logo">
          <img src={logoImg} alt="Logo heroes" />
          <strong>Bem vindo(a), Pedro</strong>
        </div>
        <nav>
          <Button onClick={handleNavigatorRegisterPost}>
            Cadastrar novo caso
          </Button>
          <button onClick={handleLogout} className="button-logout">
            <FiPower />
          </button>
        </nav>
      </header>
      <main className="feed-container">
        <h1>Casos cadastrados</h1>
        <div className="feed-content">
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
}
