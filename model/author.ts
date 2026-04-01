export interface Author {
  id: number;
  name: string;
}

export const authors: Author[] = [
  { id: 1, name: "Jane Austen" },
  { id: 2, name: "Mark Twain" },
  { id: 3, name: "Charles Dickens" },
];

export class AuthorDAO {
  static getAuthorById = async (id: number): Promise<Author | undefined> => {
    return authors.find((author) => author.id === id);
  };
}
