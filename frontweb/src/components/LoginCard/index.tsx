import MainButton from "components/MainButton";
import "./styles.css";

function LoginCard() {
  return (
    <>
      <div className="card component-login">
        <div className="card-body component-login-body">
          <h5 className="card-title">LOGIN</h5>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Senha"
          />
          <div className="component-login-text">
            <div>Esqueci a senha?</div>
          </div>
          <MainButton key={"mb1"} title={"FAZER LOGIN"} />
          <h4>Não tem Cadastro?</h4>
          <a href="%">CADASTRAR</a>
        </div>
      </div>
    </>
  );
}

export default LoginCard;
