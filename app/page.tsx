import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 gap-4">
      <Link href="send-mail">SEND MAIL</Link>
    </main>
  );
}
