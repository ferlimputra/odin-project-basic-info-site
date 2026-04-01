import { Router } from "express";
import { MessageController } from "../controllers";
import { links, messages } from "../model";

export const router = Router();

router.get("/message", (_req, res) => {
  res.render("message-board", { messages, links });
});

router.post("/message/new", MessageController.addMessage);
