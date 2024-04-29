"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="bg-salmon">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link className="text-24" href="/">
            Caro Adamska
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/about"
              className={
                currentPath === "/about" ? "text-24 underline" : "text-24"
              }
            >
              about
            </Link>
            <Link
              className={
                currentPath === "/contact" ? "text-24 underline" : "text-24"
              }
              href="/contact"
            >
              contact
            </Link>
            <Link className="text-24" href="/contact">
              en
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
