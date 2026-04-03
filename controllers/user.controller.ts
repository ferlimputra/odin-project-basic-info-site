import { Handler, Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../db";
import { links, User } from "../model";
import { UserValidator } from "../validators/user.validator";

export class UserController {
  static async getUsers(_req: Request, res: Response): Promise<void> {
    res.render("user/user", {
      title: "User List",
      users: await getAllUsers(),
      links,
    });
  }

  static createUserGet(_req: Request, res: Response): void {
    res.render("user/create-user", {
      title: "Create User",
      links,
    });
  }

  static createUserPost: Handler[] = [
    ...UserValidator.validateUser(),
    async (req: Request, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("user/create-user", {
          title: "Create User",
          links,
          errors: errors.array(),
        });
      }
      const { username, email, birthdate } = matchedData(req);
      await createUser({ username, email, date_of_birth: birthdate });
      res.redirect("/user");
    },
  ];

  static async updateUserGet(req: Request, res: Response): Promise<void> {
    const id = Number.parseInt(req.params.id as string);
    const user: User | undefined = await getUserById(id);

    res.render("user/update-user", {
      title: "Update User",
      user,
      links,
    });
  }

  static updateUserPost: Handler[] = [
    ...UserValidator.validateUser(),
    async (req: Request, res: Response) => {
      const id = Number.parseInt(req.params.id as string);
      const user: User | undefined = await getUserById(id);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).render("user/update-user", {
          title: "Update User",
          user,
          links,
          errors: errors.array(),
        });
      }
      const { username, email, birthdate } = matchedData(req);
      await updateUser(id, {
        username,
        email,
        date_of_birth: birthdate,
      });
      res.redirect("/user");
    },
  ];

  static async deleteUserPost(req: Request, res: Response): Promise<void> {
    const id = Number.parseInt(req.params.id as string);
    await deleteUser(id);
    res.redirect("/user");
  }
}
