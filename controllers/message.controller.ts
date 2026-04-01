import express from "express";
import { messages } from "../model";

export class MessageController {
  static addMessage(req: express.Request, res: express.Response): void {
    if (req.body.content && req.body.user) {
      messages.push({
        id: messages.length + 1,
        content: req.body.content,
        user: req.body.user,
        createdAt: new Date(),
      });
      res.redirect("/message");
    }
  }
}
