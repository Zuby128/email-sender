"use client";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const initialValue = { email: "", fullName: "" };
  const [content, setContent] = useState(initialValue);
  const [load, setLoad] = useState(false);

  const setValues = (e: any) => {
    setContent({ ...content, [e.target.id]: e.target.value });
  };
  const send = async () => {
    if (!content.email && !content.fullName) return;
    setLoad(true);
    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: content.email,
        fullName: content.fullName,
        subject: "Lorem Kart Bilgilendirme",
      }),
    });

    await response.json();

    setLoad(false);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 gap-4">
      <form>
        <Input
          name="full name"
          id="fullName"
          placeholder="full name"
          onChange={setValues}
        />
        <Input
          name="email"
          id="email"
          placeholder="email"
          onChange={setValues}
        />
        <br />
        {!load ? <Button formAction={send}>test</Button> : <Spinner />}
      </form>
    </main>
  );
}
