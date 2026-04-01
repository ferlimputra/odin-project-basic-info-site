import { User } from "../model";

class UserStorage {
  private users: User[] = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      birthdate: "1990-01-01",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      birthdate: "1992-05-15",
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: User): boolean {
    const user = this.getUserById(id);
    if (user) {
      const index = this.users.indexOf(user);
      this.users[index] = { ...user, ...updatedUser };
      return true;
    }
    return false;
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export const userStorage = new UserStorage();
