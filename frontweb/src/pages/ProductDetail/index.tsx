import "./styles.css";

import { ReactComponent as ComeBack } from "assets/images/comeback.svg";
import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <>
      <div className="card product-detail">
        <div className="card-body">
          <div className="product-detail-come-back">
            <Link to="/catalog">
              <ComeBack className="product-detail-come-back-img" />
              VOLTAR
            </Link>
          </div>

          <div className="product-detail-image">
            <img
              src={require("assets/images/desktop-detail.png")}
              alt="Desktop"
            />
          </div>
          <div className="product-detail-info">
            <Link to="/productdetail">
              <div className="product-detail-info-title">
                Computador Desktop - Intel Core i7
              </div>
            </Link>
            <div className="product-detail-text">
              <div className="product-detail-text-c1">R$</div>
              <div className="product-detail-text-c2">2.799</div>
              <div className="product-detail-text-c3">,00</div>
            </div>
          </div>
          <div className="product-detail-description">
            <h4>Descrição do Produto</h4>
            <p>
              Produto para garantir a <br />
              produtividade no seu dia a dia O desempenho que você precisa para
              uma jornada eficiente é garantindo pelos processadores Intel da
              família Core
            </p>
            <p>
              Conectividade ao seu alcance
              <br /> Saídas de áudio com qualidade HD e conexões USB estão
              disponíveis na frontal do seu CorPc
            </p>
            <p>
              Baixo consumo <br />
              Mesmo trabalhando todos os dias, <br />
              você não terá sustos na conta de
              <br />
              energia. Fizemos tudo bem feito.
              <br />
              para o seu CorPC seja eficiente.
              <br />
              silencioso e econômico no consumo
              <br />
              de energia elétrica
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
