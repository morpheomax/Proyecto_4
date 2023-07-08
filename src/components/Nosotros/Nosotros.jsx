import interior from "../../assets/img/banners/interior_rest_2.jpeg";
import "./Nosotros.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Nosotros = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col xs={12}>
            <h3 className="text-center mt-4">¿Quiénes somos?</h3>
          </Col>
          <Col xs={12} sm={5} lg={4}>
            <img src={interior} className="imagen" alt="Nosotros" />
          </Col>
          <Col xs={12} sm={7} lg={8}>
            <p className="card-text">
              Bienvenidos a Boss Burger, la hamburguesería artesanal más querida
              de Santiago de Chile. Fundada en 2019 por dos apasionados
              hermanos, nuestro objetivo es ofrecerte una experiencia única y
              sabrosa en cada bocado. Nos enorgullece presentar una amplia carta
              de hamburguesas artesanales, elaboradas con ingredientes frescos y
              de la más alta calidad.
            </p>
            <p className="card-text">
              A lo largo de los años, nos hemos adaptado a los desafíos que el
              mundo nos ha presentado, especialmente durante la pandemia.
              Implementamos sistemas de reserva de mesas y envíos a domicilio a
              través de nuestro sitio web, para que puedas disfrutar de nuestras
              deliciosas hamburguesas desde la comodidad de tu hogar. Nuestro
              compromiso es brindarte un servicio excepcional y una atención
              personalizada, para que cada visita a Boss Burger sea una
              experiencia inolvidable. ¡Te invitamos a sumergirte en el sabor y
              la pasión por las hamburguesas artesanales en Boss Burger!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
