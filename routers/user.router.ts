import { Router } from "express";
import { UserController } from "../controllers";

export const router = Router();

router.get("/user", UserController.getUsers);

router.get("/user/create", UserController.createUserGet);
router.post("/user/create", UserController.createUserPost);

router.get("/user/:id/update", UserController.updateUserGet);
router.post("/user/:id/update", UserController.updateUserPost);

router.post("/user/:id/delete", UserController.deleteUserPost);
