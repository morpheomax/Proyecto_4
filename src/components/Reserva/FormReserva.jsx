import { useState, useEffect } from "react";
import { db, auth, provider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import "./Reserva.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import "moment/locale/es";
export const FormReserva = () => {
  const initialValue = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mesa: "",
    fechaReserva: "",
    horaReserva: "",
  };
  const [info, setInfo] = useState(initialValue);
  const [infoArray, setInfoArray] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [user, setUser] = useState(null);
  const [mostrarAlert, setMostrarAlert] = useState(false);
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [modalData, setModalData] = useState(null);

  // logica usuario conexión
  const login = () => {
    signInWithPopup(auth, provider).then(({ user }) => {
      // console.log(user);
      setUser({
        id: user?.id || null,
        email: user?.email || null,
        name: user.displayName,
        photo: user.photoURL,
      });
    });
  };

  const logOut = () => {
    setUser(null);
  };

  {
    /* Paso 3 de editar, Obtener el documento cuando el id espeficicado de la BDD */
  }
  const obtenerComidaId = async (id) => {
    const doc = await db.collection("reservaciones").doc(id).get();
    {
      /* Paso 4 de editar, Mostrar información del elemento que se está editando en el formulario estableciendo el estado de setInfo */
    }
    setInfo(doc.data());
  };

  // Obtener datos de firebase

  const readFb = async () => {
    await db.collection("reservaciones").onSnapshot((querySnapshot) => {
      if (querySnapshot) {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setInfoArray(docs);
      }
    });
    // console.log(infoArray);
  };

  const manejandoCambiosFormulario = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  // Enviar datos

  const submitFormulario = async (e) => {
    e.preventDefault(); // Evitar recarga de la página
    try {
      if (currentId === "") {
        await db.collection("reservaciones").add(info);
        setInfo(initialValue);
      } else {
        // Paso 5, actualizar en nuestra BD el elemento con el id que se está editando la información que obtiene desde el form
        await db.collection("reservaciones").doc(currentId).update(info);
        // Paso 6 de editar, eliminar el id que se esta editando y establecer nuestra app al estado inicial
        setCurrentId("");
        setMostrarAlert(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Eliminar datos

  const onDelete = async (id) => {
    await db.collection("reservaciones").doc(id).delete();
    setMostrarModalEliminar(false);
    setMostrarAlert(true);
  };

  // Mostrar modal de eliminar

  const mostrarModalEliminarHandler = (id) => {
    setCurrentId(id);
    setMostrarModalEliminar(true);
  };

  // Mostrar modal de editar

  const mostrarModalEditarHandler = (id) => {
    setCurrentId(id);
    setMostrarModalEditar(true);
  };

  // Paso 2 ID de editar

  // arreglo de dependencias
  useEffect(() => {
    readFb();
  }, []);
  useEffect(() => {
    if (currentId === "") {
      setInfo(initialValue);
    } else {
      obtenerComidaId(currentId);
    }
  }, [currentId]);

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

  // Modal de eliminación
  const eliminarModal = (
    <Modal
      show={mostrarModalEliminar}
      onHide={() => setMostrarModalEliminar(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que deseas eliminar este registro?
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setMostrarModalEliminar(false)}
        >
          Cancelar
        </Button>
        <Button variant="danger" onClick={() => onDelete(modalData.id)}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // Modal de edición
  const editarModal = (
    <Modal
      show={mostrarModalEditar}
      onHide={() => setMostrarModalEditar(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>Aquí puedes editar el registro seleccionado.</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setMostrarModalEditar(false)}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => editarRegistro(modalData.id)}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );

  //Fecha hora Moment
  const fechaMinima = moment().format("YYYY-MM-DD");
  const horaMinima = moment().format("HH:mm");

  return (
    <>
      <div className="sesion">
        {user ? (
          <>
            <div className="user">
              <div className="user-login">
                <img className="avatar" src={user.photo} alt={user.name}></img>
                <Card.Text>Bienvenido</Card.Text>
                <Card.Title>{user.name}</Card.Title>
              </div>
              <Button variant="outline-dark" onClick={logOut}>
                Cerrar Sesion
              </Button>
            </div>
          </>
        ) : (
          <div className="logueo">
            <h2 className="indicacion animate__animated animate__tada">
              Para registrar o ver reservas realizadas, debes iniciar sesión.
            </h2>
            <Button variant="outline-dark" onClick={login}>
              Iniciar Sesion
            </Button>
          </div>
        )}
      </div>
      <hr />

      {user ? (
        <>
          <Container>
            <form onSubmit={submitFormulario}>
              <Row>
                <Col xs={6} md={12} lg={12}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="nombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Escriba su nombre"
                        onChange={manejandoCambiosFormulario}
                        value={info.nombre}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="apellido">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        name="apellido"
                        id="apellido"
                        placeholder="Apellido"
                        onChange={manejandoCambiosFormulario}
                        value={info.apellido}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="apellido">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="correo"
                        id="correo"
                        placeholder="tuemail@email.com"
                        onChange={manejandoCambiosFormulario}
                        value={info.correo}
                        required
                      />
                    </Form.Group>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xs={6} md={12} lg={12}>
                  <Row className="mb-2">
                    <Form.Group as={Col} controlId="telefono">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        type="number"
                        name="telefono"
                        id="telefono"
                        placeholder="569999999"
                        onChange={manejandoCambiosFormulario}
                        value={info.telefono}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="mesa">
                      <Form.Label>Mesa</Form.Label>
                      <Form.Select
                        name="mesa"
                        id="mesa"
                        onChange={manejandoCambiosFormulario}
                        value={info.mesa}
                        required
                      >
                        <option value="Mesa 1">Mesa 1</option>
                        <option value="Mesa 2">Mesa 2</option>
                        <option value="Mesa 3">Mesa 3</option>
                        <option value="Mesa 4">Mesa 4</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="fechaReserva">
                      <Form.Label>Fecha Reserva</Form.Label>
                      <Form.Control
                        type="date"
                        name="fechaReserva"
                        id="fechaReserva"
                        onChange={manejandoCambiosFormulario}
                        value={info.fechaReserva}
                        min={fechaMinima}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="horaReserva">
                      <Form.Label>Hora</Form.Label>
                      <Form.Control
                        type="time"
                        name="horaReserva"
                        id="horaReserva"
                        onChange={manejandoCambiosFormulario}
                        value={info.horaReserva}
                        min={horaMinima}
                        required
                      />
                    </Form.Group>

                    <Button className="mt-4 " variant="primary" type="submit">
                      {currentId === "" ? "Agregar" : "Actualizar"}
                    </Button>
                  </Row>
                </Col>
              </Row>
            </form>
            {mostrarAlert && (
              <Alert
                variant="success"
                onClose={() => setMostrarAlert(false)}
                dismissible
              >
                El registro se ha creado con éxito
              </Alert>
            )}
          </Container>

          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Mesa</th>
                <th>Fecha Reserva</th>
                <th>Hora</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {infoArray.map((el) => (
                <tr key={el.id}>
                  <td>{el.nombre}</td>
                  <td>{el.apellido}</td>
                  <td>{el.correo}</td>
                  <td>{el.telefono}</td>
                  <td>{el.mesa}</td>
                  <td>{el.fechaReserva}</td>
                  <td>{el.horaReserva}</td>

                  <td>
                    <Button
                      variant="info"
                      className="m-2"
                      onClick={() => setCurrentId(el.id)}
                    >
                      Editar
                    </Button>
                    <Button variant="danger" onClick={() => onDelete(el.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
