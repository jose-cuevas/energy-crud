import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { modifyUser } from "../api/api";

const ModalModifyUser = ({
  userId,
  nombre,
  apellido1,
  apellido2,
  documento,
  direccion,
  telefono,
}) => {
  const modifyUserAlert = () => toast.success("Usuario Editado!");
  // Modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Form states
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {    
    modifyUser(userId, data);
    modifyUserAlert();
    window.location.reload();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label for="nombre">Nombre:</label>
              <br />
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder={nombre}
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                {...register("nombre")}
              />
            </div>

            <div className="mb-2">
              <label for="apellido1">Primer apellido:</label>
              <br />
              <input
                type="text"
                name="apellido1"
                id="apellido1"
                placeholder={apellido1}
                {...register("apellido1")}
              />
            </div>
            <div className="mb-2">
              <label for="apellido2">Segundo apellido:</label>
              <br />
              <input
                type="text"
                name="apellido2"
                id="apellido2"
                placeholder={apellido2}
                {...register("apellido2")}
              />
            </div>
            <div className="mb-2">
              <label for="documento">Documento (NIF, NIE):</label>
              <br />
              <input
                type="text"
                name="documento"
                id="documento"
                placeholder={documento}
                pattern="^([0-9]{8}[A-Z])|[XYZ][0-9]{7}[A-Z]$ | "
                {...register("documento")}
              />
            </div>
            <div className="mb-2">
              <label for="direccion">Direccion:</label>
              <br />
              <input
                type="text"
                name="direccion"
                id="direccion"
                placeholder={direccion}
                {...register("direccion")}
              />
            </div>
            <div className="mb-2">
              <label for="telefono">Telefono: </label>
              <br />
              <input
                type="tel"
                name="telefono"
                id="telefono"
                pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                placeholder={telefono}
                {...register("telefono")}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="outline-primary"
                className="mt-4 w-100"
              >
                Guardar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalModifyUser;
