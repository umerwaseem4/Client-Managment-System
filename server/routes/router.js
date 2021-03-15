import express from "express";
import { homeRoutes, addUser, updateUser } from "../services/render.js";
import { create, update, deleteUser, find } from "../controller/controller.js";
const router = express.Router();

/**
 * @description Root Route
 * @method GET/
 */
router.get("/", homeRoutes);

/**
 * @description add user
 * @method GET/
 */
router.get("/add-user", addUser);

/**
 * @description update user
 * @method GET/
 */
router.get("/update-user", updateUser);

/**
 * Making API of the application!
 */
router.post("/api/users", create);
router.get("/api/users", find);
router.put("/api/users/:id", update);
router.delete("/api/users/:id", deleteUser);

export default router;
