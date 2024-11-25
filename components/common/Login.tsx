"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const router = useRouter();
  const loginSystem = async () => {
    const response = await fetch("/api/loginapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Content-Type başlığını ekleyin
      },
      body: JSON.stringify(login),
    });

    const { data } = await response.json();

    if (data) {
      window.localStorage.setItem(
        process.env.NEXT_PUBLIC_LOCALHOST_USER as string,
        "true"
      );
      router.push("/");
    }
  };

  const setBody = (e: any) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login Project</CardTitle>
          <CardDescription>
            Send your emails one click with awesome templates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User Name</Label>
                <Input id="email" onChange={setBody} placeholder="user name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input
                  id="password"
                  onChange={setBody}
                  placeholder="* * * * * *"
                  type="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={loginSystem}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
