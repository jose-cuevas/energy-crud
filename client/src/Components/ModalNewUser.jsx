import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { createUser } from "../api/api";

const ModalNewUser = () => {
  const createUserAlert = () => toast.success("Usuario Creado!");

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
    createUser(data);    
    createUserAlert()
    window.location.reload();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-4">
        New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>  
        <Modal.Title>Create User</Modal.Title>       
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
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"             
                {...register("nombre", { required: true })}
              />       
            </div>
            {errors.nombre && (
                <span className="text-danger">&nbsp;Nombre es requerido</span>
              )}
            <div className="mb-2">
              <label for="apellido1">Primer apellido:</label>
              <br />
              <input
                type="text"
                name="apellido1"
                id="apellido1"
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
                pattern="^([0-9]{8}[A-Z])|[XYZ][0-9]{7}[A-Z]$ | "
                {...register("documento", { required: true })}
              />              
            </div>
            {errors.documento && (
                <span className="text-danger">
                  &nbsp;Documento es requerido
                </span>
              )}
            <div className="mb-2">
              <label for="direccion">Direccion:</label>
              <br />
              <input
                type="text"
                name="direccion"
                id="direccion"
                {...register("direccion")}
              />
            </div>
            <div className="mb-2">
              <label for="telefono">Telefono: </label>
              <br />
              <input
                type="tel"
                name="telefono"
                id="documetelefononto"
                pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                {...register("telefono", { required: true })}
              />              
            </div>
            {errors.telefono && (
                <span className="text-danger">&nbsp;Telefono es requerido</span>
              )}
            <div>
            <Button type="submit" variant="outline-primary" className="mt-4 w-100">
              Guardar
            </Button>
            </div>            
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalNewUser;
