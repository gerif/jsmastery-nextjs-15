import { NextResponse } from "next/server";
import { tickets } from "@/app/database/tickets";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));
  return NextResponse.json(ticket);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { name, email, password } = await request.json();
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));
  if (!ticket)
    return NextResponse.json(new Error("No such ticket"), { status: 404 });
  if (name) ticket.name = name;
  if (email) ticket.email = email;
  if (password) ticket.password = password;
  return NextResponse.json(ticket);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const ticketIndex = tickets.findIndex((ticket) => ticket.id === parseInt(id));
  if (ticketIndex === -1)
    return NextResponse.json(new Error("Ticket not found"), { status: 404 });
  tickets.splice(ticketIndex, 1);
  return NextResponse.json(tickets);
}
