import "./styles.css";

function HeaderBarButton() {
  return (
    <>
      <div className="card component-header-bar">
        <div className="card-body component-header-bar-body">
          <button
            className="btn btn-primary component-header-bar-button"
            type="submit"
          >
            Produtos
          </button>
          <button
            className="btn btn-primary component-header-bar-button"
            type="submit"
          >
            Categorias
          </button>
          <button
            className="btn btn-primary component-header-bar-button"
            type="submit"
          >
            Usuários
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderBarButton;
