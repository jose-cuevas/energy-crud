import axios from "axios";

const getAllUsers = async (urlPath, setState) => {
  try {
    const response = await fetch(urlPath);
    const data = await response.json();
    setState(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  axios
    .delete(`http://localhost:7000/user/${userId}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); 
  window.location.reload();   
};

const createUser = async (newUser) => {
  axios
    .post("http://localhost:7000/user", newUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const modifyUser = async (userId, data) => {  
 axios
    .patch(`http://localhost:7000/user/${userId}`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { getAllUsers, deleteUser, createUser, modifyUser };


