import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (
      email !== process.env.NEXT_PUBLIC_LOREM_USER ||
      password !== process.env.NEXT_PUBLIC_LOREM_PASS
    ) {
      return NextResponse.json({ data: null });
    } else {
      return NextResponse.json({ data: true });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: null });
  }
}
