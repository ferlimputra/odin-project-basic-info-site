import express from "express";
import { Author, AuthorDAO } from "../model";

export const getAuthorById = async (
  req: express.Request,
  res: express.Response,
): Promise<void> => {
  try {
    const authorId = parseInt(req.params.authorId as string, 10);
    const author: Author | undefined = await AuthorDAO.getAuthorById(authorId);

    if (!author) {
      res.status(404).json({ error: "Author not found" });
      return;
    }
    res.json(author);
  } catch (error) {
    console.error("Error fetching author:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
