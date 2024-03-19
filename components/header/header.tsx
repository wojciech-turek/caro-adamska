"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="bg-salmon">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link className="text-base" href="/">
            Caro Adamska
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/about"
              className={
                currentPath === "/about" ? "text-base underline" : "text-base"
              }
            >
              about
            </Link>
            <Link
              className={
                currentPath === "/contact" ? "text-base underline" : "text-base"
              }
              href="/contact"
            >
              contact
            </Link>
            <Link className="text-base" href="/contact">
              en
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
