import { NextResponse } from "next/server";
import { tickets } from "../../database/tickets";

export async function GET(_: Request) {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const ticket = await request.json();
  tickets.push({ id: tickets.length + 1, ...ticket });
  return NextResponse.json(tickets);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { name, email, password } = await request.json();
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));
  if (!ticket)
    return NextResponse.json(new Error("Ticket not found"), { status: 404 });
  if (name) ticket.name = name;
  if (email) ticket.email = email;
  if (password) ticket.password = password;
  return NextResponse.json(ticket);
}
