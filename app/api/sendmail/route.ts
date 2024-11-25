// app/api/sendmail/route.ts

import { compilePersonalizedTemplate } from "@/app/utils/emailUtils";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, to, subject } = await req.json();

    console.log("*********", fullName, to, subject);

    if (!fullName || !to || !subject)
      return NextResponse.json({ data: "error" });

    const email = process.env.NEXT_PUBLIC_USERNAME;
    const pass = process.env.NEXT_PUBLIC_PASSWORD;

    const transport = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_HOST,
      port: 587,
      secure: false,
      auth: {
        user: email,
        pass: pass,
      },
    });

    const body = compilePersonalizedTemplate(fullName);

    await transport.sendMail({
      from: email,
      to,
      subject,
      html: body,
    });

    return NextResponse.json({ data: true });
  } catch (error) {
    console.log("---------", error);
    return NextResponse.json({ data: "error" });
  }
}
