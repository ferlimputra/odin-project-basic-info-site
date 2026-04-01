import { Router } from "express";
import { getAuthorById } from "../controllers";

export const router = Router();

router.get("/author/:authorId", getAuthorById);
