import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;


    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/services`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );


    const data = await res.json();


    return NextResponse.json(data, {
      status: res.status,
    });


  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error,
      },
      {
        status: 500,
      }
    );

  }
}