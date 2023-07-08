import { db } from "../../firebase/firebase";
import { Map } from "../Reserva/Map";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
const ContactoForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [mostrarAlert, setMostrarAlert] = useState(false);

  const guardarContact = async (e) => {
    e.preventDefault();

    try {
      await db.collection("contacto").add({
        nombre,
        apellido,
        telefono,
        correo,
        comentario,
      });

      // Limpiar los campos del formulario después de guardar los datos
      setNombre("");
      setApellido("");
      setTelefono("");
      setCorreo("");
      setComentario("");

      setMostrarAlert(true);
    } catch (error) {
      console.error("Error al guardar la reservación:", error);
    }
  };

  useEffect(() => {
    // Después de 3 segundos, ocultar la Alert
    if (mostrarAlert) {
      const timer = setTimeout(() => {
        setMostrarAlert(false);
      }, 3000);

      // Limpiar el temporizador cuando el componente se desmonte
      return () => {
        clearTimeout(timer);
      };
    }
  }, [mostrarAlert]);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Form onSubmit={guardarContact}>
              <div className="titulo-div mb-2 container">
                <Card.Title className="text-center mt-2 mb-5 titulo animate__animated animate__backInRight">
                  Contactanos
                </Card.Title>
              </div>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    placeholder="Tu Nombre"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                    placeholder="Tu Apellido"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridTelefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="number"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    placeholder="Telefono"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridComentario">
                  <Form.Label>Comentario</Form.Label>
                  <Form.Control
                    type="textarea"
                    aria-label="With textarea"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    required
                    placeholder="Tu comentario"
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
            {mostrarAlert && (
              <Alert
                variant="success"
                onClose={() => setMostrarAlert(false)}
                dismissible
              >
                El mensaje fue enviado con éxito.
              </Alert>
            )}
          </Col>
          <Col md={12} lg={6} className="mt-5">
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactoForm;
