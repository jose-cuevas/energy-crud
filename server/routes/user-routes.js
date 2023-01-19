import { Router } from "express";
import { getUsers, createUser, deleteUser, modifyUser } from "../controllers/user-controller.js";

const userRoutes = Router()

userRoutes.get("/user", getUsers)
userRoutes.post("/user", createUser)
userRoutes.delete("/user/:id", deleteUser)
userRoutes.patch("/user/:id", modifyUser)

export default userRoutes