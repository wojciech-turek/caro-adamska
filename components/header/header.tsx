import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-salmon">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link className="text-black text-base" href="/">
            Caro Adamska
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-auto flex items-center space-x-4">
            <Link className="text-black text-base" href="/about">
              about
            </Link>
            <Link className="text-black text-base" href="/contact">
              contact
            </Link>
            <Link className="text-black text-base" href="/contact">
              en
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
