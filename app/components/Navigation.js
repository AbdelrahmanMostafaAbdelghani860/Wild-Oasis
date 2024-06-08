import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/account"> My account</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
      </ul>
    </>
  );
}
