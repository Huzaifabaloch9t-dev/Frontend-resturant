"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">🍽️ Foodies</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
