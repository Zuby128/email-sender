import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { personalizedTemplate } from "@/lib/templates/personalized-epost";

export async function POST(req: any) {
  try {
    const { fullName, to, subject } = await req.json();

    console.log("*********", fullName, to, subject);

    if (!fullName && !to && !subject)
      return NextResponse.json({ data: "error" });

    const email = process.env.NEXT_PUBLIC_USERNAME;
    const pass = process.env.NEXT_PUBLIC_PASSWORD;

    const transport = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_HOST,
      // port: process.env.NEXT_PUBLIC_PORT,
      // secure: true,
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

export function compilePersonalizedTemplate(name: string) {
  const template = handlebars.compile(personalizedTemplate);

  const htmlBody = template({
    name: name,
  });

  return htmlBody;
}
