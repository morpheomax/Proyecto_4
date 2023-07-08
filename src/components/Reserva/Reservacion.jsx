import { db } from "../../firebase/firebase";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Map } from "./Map";
import Alert from "react-bootstrap/Alert";
import moment from "moment";
import "moment/locale/es";
const Reservacion = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [mesa, setMesa] = useState("");
  const [fechaReserva, setFechaReserva] = useState("");
  const [horaReserva, setHoraReserva] = useState("");
  const [mostrarAlert, setMostrarAlert] = useState(false);
  //Fecha hora Moment
  const fechaMinima = moment().format("YYYY-MM-DD");
  const horaMinima = moment().isBefore(moment().startOf("day").add(9, "hours"))
    ? moment().startOf("day").add(9, "hours").format("HH:mm")
    : moment().format("HH:mm");
  const horaMaxima = moment()
    .endOf("day")
    .isBefore(moment().startOf("day").add(21, "hours"))
    ? moment().endOf("day").format("HH:mm")
    : moment().startOf("day").add(21, "hours").format("HH:mm");

  const guardarReservacion = async (e) => {
    e.preventDefault();

    try {
      await db.collection("reservaciones").add({
        nombre,
        apellido,
        telefono,
        correo,
        mesa,
        fechaReserva,
        horaReserva,
      });

      // Limpiar los campos del formulario después de guardar los datos
      setNombre("");
      setApellido("");
      setTelefono("");
      setCorreo("");
      setMesa("");
      setFechaReserva("");
      setHoraReserva("");

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
            <Map />
          </Col>
          <Col md={12} lg={6}>
            <Form onSubmit={guardarReservacion}>
              <div className="titulo-div mb-2 container">
                <Card.Title className="text-center mt-2 mb-5 titulo animate__animated animate__backInRight">
                  Reserva Aquí!
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
                    placeholder="Tu nombre"
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
                    placeholder="email@email.com"
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
                <Form.Group as={Col} controlId="formGridMesa">
                  <Form.Label>Mesa</Form.Label>
                  <Form.Select
                    value={mesa}
                    onChange={(e) => setMesa(e.target.value)}
                    required
                  >
                    <option>Mesa 1</option>
                    <option>Mesa 2</option>
                    <option>Mesa 3</option>
                    <option>Mesa 4</option>
                    <option>Mesa 5</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFecha">
                  <Form.Label>Fecha Reserva</Form.Label>
                  <Form.Control
                    type="date"
                    value={fechaReserva}
                    onChange={(e) => setFechaReserva(e.target.value)}
                    min={fechaMinima}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridHora">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    value={horaReserva}
                    onChange={(e) => setHoraReserva(e.target.value)}
                    min={horaMinima}
                    max={horaMaxima}
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Estoy seguro de los datos ingresados"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Reservar
              </Button>
            </Form>
            {mostrarAlert && (
              <Alert
                variant="success"
                onClose={() => setMostrarAlert(false)}
                dismissible
              >
                El registro se ha creado con éxito
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reservacion;
