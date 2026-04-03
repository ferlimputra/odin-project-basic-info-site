import { User } from "../model/user";
import { pool } from "./pool";

export const getUserById = async (id: number): Promise<User | undefined> => {
  const result = await pool.query("SELECT * FROM top_user WHERE id = $1", [id]);
  return result.rows[0];
};

export const getUserByName = async (
  name: string,
): Promise<User | undefined> => {
  const result = await pool.query("SELECT * FROM top_user WHERE name = $1", [
    name,
  ]);
  return result.rows[0];
};

export const getAllUsers = async (): Promise<User[]> => {
  const result = await pool.query("SELECT * FROM top_user");
  return result.rows;
};

export const createUser = async (user: User): Promise<User> => {
  const result = await pool.query(
    "INSERT INTO top_user (username, email, date_of_birth) VALUES ($1, $2, $3) RETURNING *",
    [user.username, user.email, user.date_of_birth],
  );
  return result.rows[0];
};

export const updateUser = async (
  id: number,
  user: Partial<User>,
): Promise<User | undefined> => {
  const result = await pool.query(
    "UPDATE top_user SET username = $2, email = $3, date_of_birth = $4 WHERE id = $1 RETURNING *",
    [id, user.username, user.email, user.date_of_birth],
  );
  return result.rows[0];
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const result = await pool.query("DELETE FROM top_user WHERE id = $1", [id]);
  return result.rowCount != null && result.rowCount > 0;
};
