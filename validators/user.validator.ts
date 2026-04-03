import { body, ValidationChain } from "express-validator";

export class UserValidator {
  static validateUser(): ValidationChain[] {
    return [
      body("username")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isAlpha()
        .withMessage("Name must contain only alphabet letters"),
      body("email").trim().isEmail().withMessage("Invalid email address"),
      body("birthdate")
        .trim()
        .isDate()
        .optional({ values: "falsy" })
        .isISO8601()
        .withMessage("Invalid birthdate"),
    ];
  }
}
