import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white w-max hover:bg-gray-100 hover:text-black duration-150 ease-in-out">
      <nav>
        <div className="flex space-x-4">
          <Link href="/" className="font-display text-lg text-white-500">
            W&S Logo
          </Link>
        </div>
      </nav>
    </header>
  );
}
