import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/blog">
        Go to blog Page
      </Link>
    </div>
  );
}