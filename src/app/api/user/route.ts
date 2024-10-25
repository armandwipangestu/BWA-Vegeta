import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Get all users",
      data: [
        {
          id: 1,
          name: "Arman",
        },
        {
          id: 2,
          name: "Dwi",
        },
      ],
    },
    {
      status: 200,
    }
  );
}

export async function POST() {
  return NextResponse.json(
    {
      success: true,
      message: "New users created",
      data: {
        id: 1,
        name: "Arman",
      },
    },
    {
      status: 201,
    }
  );
}
