import books from "@/app/api/db";
import { Context } from "node:vm";

export async function PUT(
  request: Request,
  context: { params: { id: string } },
) {
  const id = +context.params.id;
  const book = await request.json();
  const index = books.findIndex((book) => book.id === id);
  books[index] = book;
  return Response.json(books);
}
