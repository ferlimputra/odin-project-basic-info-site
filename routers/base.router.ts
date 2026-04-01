import { Router } from "express";
import { links } from "../model";

export const router = Router();

router.get("/", (_req, res) => {
  res.render("index", { title: "Home Page", links });
});

router.get("/about", (_req, res) => {
  res.render("index", { title: "About Page", links });
});
