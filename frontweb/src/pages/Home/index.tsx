import { Button, Card } from "react-bootstrap";

import "./styles.css";
import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import LoginCard from "components/LoginCard";
import MainButton from "components/MainButton";

function Home() {
  return (
    <>
      <LoginCard />
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
            <MainButton key={"mb2"} title={"INICIE AGORA A SUA BUSCA"} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
