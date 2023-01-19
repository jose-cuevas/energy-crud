import UserModel from "../models/user-models.js";
import { errorHandleHttp } from "../utils/error-handle.js";

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    errorHandleHttp(res, "GET_USERS_ERROR");
  }
};

const createUser = async (req, res) => {
  const {
    nombre,
    apellido1,
    apellido2,
    documento,
    cp,
    localidad,
    direccion,
    telefono,
  } = req.body;
  try {
    const newUser = UserModel.create({
      nombre,
      apellido1,
      apellido2,
      documento,
      cp,
      localidad,
      direccion,
      telefono,
    });
    res.status(201).send({ message: "New user created!" });
  } catch (error) {
    errorHandleHttp(res, "CREATE_USER_ERROR");
  }
};

const deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  try {
    const deletedUser = await UserModel.findOneAndDelete({ _id: userId });
    res.status(201).send({ message: `User with id ${userId} was deleted!` });    
  } catch (error) {
    errorHandleHttp(res, "DELETE_USER_ERROR");
  }
};

const modifyUser = async (req, res) => {
  const { id: userId } = req.params;
  const { nombre, apellido1, apellido2, documento, direccion, telefono } =
    req.body;    
  try {
    const newUser = await UserModel.findByIdAndUpdate(
      { _id: userId },
      {
        $set: { nombre, apellido1, apellido2, documento, direccion, telefono },
      },
      { new: true }
    );    
    res.status(201).send({ message: "User modify"});
  } catch {
    errorHandleHttp(res, "UPDATE_USER_ERROR");
  }
};

export { getUsers, createUser, deleteUser, modifyUser };
