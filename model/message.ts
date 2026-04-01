export interface Message {
  id: number;
  content: string;
  user: string;
  createdAt: Date;
}

export const messages: Message[] = [
  {
    id: 1,
    content: "Hello world!",
    user: "Alice",
    createdAt: new Date("2024-01-01T10:00:00Z"),
  },
  {
    id: 2,
    content: "How are you?",
    user: "Bob",
    createdAt: new Date("2025-01-02T11:00:00Z"),
  },
];
