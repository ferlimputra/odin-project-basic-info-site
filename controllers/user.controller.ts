import { Handler, Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { links, User } from "../model";
import { userStorage } from "../storages";
import { UserValidator } from "../validators/user.validator";

export class UserController {
  static getUsers(_req: Request, res: Response): void {
    res.render("user/user", {
      title: "User List",
      users: userStorage.getUsers(),
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
    (req: Request, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("user/create-user", {
          title: "Create User",
          links,
          errors: errors.array(),
        });
      }
      const { name, email, birthdate } = matchedData(req);
      userStorage.addUser({ name, email, birthdate });
      res.redirect("/user/user");
    },
  ];

  static updateUserGet(req: Request, res: Response): void {
    const id = Number.parseInt(req.params.id as string);
    const user: User | undefined = userStorage.getUserById(id);

    res.render("user/update-user", {
      title: "Update User",
      user,
      links,
    });
  }

  static updateUserPost: Handler[] = [
    ...UserValidator.validateUser(),
    (req: Request, res: Response) => {
      const id = Number.parseInt(req.params.id as string);
      const user: User | undefined = userStorage.getUserById(id);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).render("user/update-user", {
          title: "Update User",
          user,
          links,
          errors: errors.array(),
        });
      }
      const { name, email, birthdate } = matchedData(req);
      userStorage.updateUser(id, {
        name,
        email,
        birthdate,
      });
      res.redirect("/user/user");
    },
  ];

  static deleteUserPost(req: Request, res: Response): void {
    const id = Number.parseInt(req.params.id as string);
    userStorage.deleteUser(id);
    res.redirect("/user/user");
  }
}
