import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./CartaList.css";

import { Transition } from "react-transition-group";
import { useState, useRef } from "react";

// import Imagenes
import TomCruise from "../../assets/img/galery/TomCruisecarta.jpeg";
import TomGun from "../../assets/img/galery/tomguncarta.jpeg";
import TomImposible from "../../assets/img/galery/TomImposibleCarta.jpeg";
import PolloAcho from "../../assets/img/galery/polloachorado.jpeg";
import MilaNapo from "../../assets/img/galery/NAPOLITANA.png";
import Pescado from "../../assets/img/galery/pescadotemp.png";
const CartaList = () => {
  const [inProp, setInProp] = useState(false);

  return (
    <>
      <div className="caja-titulo">
        <div className="titulo animate__animated animate__bounce">
          Nuestras Hambuguesas
        </div>
      </div>
      <CardGroup>
        <Transition in={inProp} timeout={500}>
          {(state) => (
            <Card className={`text-center ${state}`}>
              <Card.Img variant="top" src={TomCruise} />
              <Card.Body>
                <Card.Title>Tom Cruise</Card.Title>
                <Card.Text>
                  Pan martin's, pescado tempura, mayo, lechuga, tártara, salsa
                  criolla y ají amarillo + PAPAS FRITAS
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>$10.990</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          )}
        </Transition>

        <Transition in={inProp} timeout={500}>
          {(state) => (
            <Card className={`text-center ${state}`}>
              <Card.Img variant="top" src={TomGun} />
              <Card.Body>
                <Card.Title>Tom Gun</Card.Title>
                <Card.Text>
                  Servido en pan Martin's, tiernos trozos de Brisket guisado con
                  cebolla caramelizada, lechuga, palta, pebre y mayonesa + PAPAS
                  FRITAS
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>$9.990</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          )}
        </Transition>

        <Transition in={inProp} timeout={500}>
          {(state) => (
            <Card className={`text-center ${state}`}>
              <Card.Img variant="top" src={TomImposible} />
              <Card.Body>
                <Card.Title>Tom Imposible</Card.Title>
                <Card.Text>
                  ¡MEJOR IMPOSIBLE! Servido en pan Martin's, Hamburguesa 150 gr
                  con Tiernos trozos de Brisket guisado, cebolla caramelizada,
                  palta, porotos verdes y queso llanero + PAPAS FRITAS
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>$13.990</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          )}
        </Transition>
      </CardGroup>

      <CardGroup>
        <Transition in={inProp} timeout={500}>
          {(state) => (
            <Card className={`text-center ${state}`}>
              <Card.Img variant="top" src={PolloAcho} />
              <Card.Body>
                <Card.Title>Pollo Achorado</Card.Title>
                <Card.Text>
                  Pan Martin's, lechuga, tomate, pechuga de pollo broster,
                  ensaladita, ají amarillo y mayonesa + PAPAS FRITAS
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>$7.990</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          )}
        </Transition>

        <Transition in={inProp} timeout={500}>
          {(state) => (
            <Card className={`text-center ${state}`}>
              <Card.Img variant="top" src={MilaNapo} />
              <Card.Body>
                <Card.Title>Milanesa Napolitana</Card.Title>
                <Card.Text>
                  Pan francés, milanesa de vacuno, aceite de oliva, orégano,
                  salsa de tomate y queso chanco + PAPAS FRITAS
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>$9.990</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          )}
        </Transition>

        <Transition in={inProp} timeout={500}>
          {(state) => (
            <Card className={`text-center ${state}`}>
              <Card.Img variant="top" src={Pescado} />
              <Card.Body>
                <Card.Title>Pescado Tempuron</Card.Title>
                <Card.Text>
                  Pan martin's, pescado tempura, mayo, lechuga, tártara, salsa
                  criolla y ají amarillo + PAPAS FRITAS
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>$9.990</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          )}
        </Transition>
      </CardGroup>
    </>
  );
};
export default CartaList;
