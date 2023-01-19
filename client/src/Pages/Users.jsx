import { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import toast, { Toaster } from "react-hot-toast";

import { UserContext } from "../context/UserContext";
import { deleteUser, modifyUser } from "../api/api";
import ModalNewUser from "../Components/ModalNewUser"
import ModalModifyUser from "../Components/ModalModifyUser";

const Users = () => {
  const { users } = useContext(UserContext);  
  const deleteAlert = () => toast.error("Usuario borrado!",{duration: 6000}); 
   
  return (
    <>
      <h1 className="text-center mt-3 mb-5">Gana Energia Contracts</h1>
      <ModalNewUser />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {users.map((user) => {
          const { _id: userId, nombre, apellido1, apellido2, documento, direccion, telefono } = user;
          return (
            <tbody>
              <tr key={userId}>
                <td>{userId}</td>
                <td>{nombre}</td>
                <td>{documento}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={()=>{deleteAlert(); deleteUser(userId);}}                   
                  >Delete
                  </Button>                  
                  {/* <ModalModifyUser userId={userId} nombre={nombre} apellido1={apellido1} apellido2={apellido2} documento={documento} direccion={direccion} telefono={telefono}/> */}
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <Toaster />
    </>
  );
};

export default Users;
