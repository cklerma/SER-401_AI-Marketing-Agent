import Link from "next/link";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function Home() {

  const name = "Chris";
  const number = 10;
  const aboutPage = "/about"

  return (
    <main>
      <h1>Hello {name}!</h1>
      <WelcomeMessage />

      <p>I am learning Next.js.</p>

      <p>My number is {number}</p>
      <p>10 + 10 = {number + number}</p>

      <Link href={aboutPage}>
      Go to About
      </Link>
    </main>
    
  );
}