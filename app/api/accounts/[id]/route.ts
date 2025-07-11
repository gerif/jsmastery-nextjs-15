import { NotFoundError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";
import handleError from "@/lib/handlers/error";
import { APIErrorResponse } from "@/types/global";
import { AccountSchema } from "@/lib/validations";
import Account from "@/database/account.model";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  if (!id) throw new NotFoundError("Account");

  try {
    await dbConnect();
    const account = await Account.findById(id);
    if (!account) throw new NotFoundError("Account");
    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

//delete
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  if (!id) throw new NotFoundError("Account");

  try {
    await dbConnect();
    const account = await Account.findByIdAndDelete(id);
    if (!account) throw new NotFoundError("Account");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  if (!id) throw new NotFoundError("Account");

  try {
    await dbConnect();
    const body = await request.json();
    const validatedData = AccountSchema.partial().safeParse(body);
    if (!validatedData.success)
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    const updatedAccount = await Account.findByIdAndUpdate(id, validatedData, {
      new: true,
    });
    if (!updatedAccount) throw new NotFoundError("Account");
    return NextResponse.json(
      { success: true, data: updatedAccount },
      { status: 200 },
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
