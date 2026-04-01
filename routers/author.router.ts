import { Router } from "express";
import { getAuthorById } from "../controllers";
import { authors, links } from "../model";

export const router = Router();

router.get("/author", (req, res) => {
  res.render("author", { title: "Authors", authors, links });
});

router.get("/author/:authorId", getAuthorById);
