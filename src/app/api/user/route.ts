import Response from "@/lib/api.response";
import { NextResponse } from "next/server";

export async function GET() {
  return Response({
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
    status: 200,
  });
}

export async function POST() {
  return Response({
    message: "New users created",
    data: {
      id: 1,
      name: "Arman",
    },
  });
}
