// import nodemailer from "nodemailer";
// import * as handlebars from "handlebars";
// import { personalizedTemplate } from "./templates/personalized-epost";

// export async function sendMail({
//   to,
//   name,
//   subject,
//   body,
// }: {
//   to: string;
//   name: string;
//   subject: string;
//   body: string;
// }) {
//   const email = process.env.NEXT_PUBLIC_USERNAME;
//   const pass = process.env.NEXT_PUBLIC_PASSWORD;

//   const transport = nodemailer.createTransport({
//     host: process.env.NEXT_PUBLIC_HOST,
//     // port: process.env.NEXT_PUBLIC_PORT,
//     // secure: true,
//     port: 587,
//     secure: false,
//     auth: {
//       user: email,
//       pass: pass,
//     },
//   });

//   try {
//     const result = await transport.verify();
//   } catch (error) {
//     console.log("iiiiiiiii", error);
//   }

//   try {
//     const send = await transport.sendMail({
//       from: email,
//       to,
//       subject,
//       html: body,
//     });
//   } catch (error) {
//     console.log("---------", error);
//   }
// }

// export function compilePersonalizedTemplate(name: string) {
//   const template = handlebars.compile(personalizedTemplate);

//   const htmlBody = template({
//     name: name,
//   });

//   return htmlBody;
// }
