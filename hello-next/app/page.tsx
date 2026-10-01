export default function Home() {

  const name = "Chris";
  const number = 10;

  return (
    <main>
      <h1>Hello {name}!</h1>

      <p>I am learning Next.js.</p>

      <p>My number is {number}</p>
      <p>10 + 10 = {number + number}</p>

      <button> Click Me! </button>
    </main>
    
  );
}