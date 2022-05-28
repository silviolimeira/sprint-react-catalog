import { Button, Card } from "react-bootstrap";

import "./styles.css";
import { ReactComponent as MainImage } from "assets/images/main-image.svg";

function Home() {
  return (
    <>
      <Card className="page-home-card">
        <Card.Body className="page-home">
          <div className="page-home-main-image">
            <MainImage />
          </div>
          <div className="page-home-content">
            <Card.Title>Conheça o melhor catálogo de produtos</Card.Title>
            <Card.Text>
              Ajudaremos vocÊ a encontrar os melhores produtos disponíveis no
              mercado
            </Card.Text>
            <div className="page-home-botao">
              <Button variant="primary text-white page-home-botao-b1">
                &gt;
              </Button>
              <Button variant="page-home-botao-b2">
                INICIE AGORA A SUA BUSCA
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
