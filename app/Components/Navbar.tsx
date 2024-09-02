import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 px-4 bg-slate-50 flex flex-row-reverse items-center justify-between sticky top-0 shadow-md opacity-75">
      <div className="flex items-center space-x-4">
        <div className="w-8 cursor-pointer">
          <Link href="https://github.com/abhishekp6" target="_blank">
            <svg
              viewBox="0 0 16 16"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </Link>
        </div>
        <div className="cursor-pointer group">
          <Link
            href="https://medium.com/@codewithram"
            target="_blank"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Blogs
            <span className="inline-block ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="cursor-pointer group">
          <a
            href="https://codewithram.beehiiv.com/subscribe"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Newsletter
            <span className="inline-block ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
        <div className="cursor-pointer group">
          <Link
            href="#about"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            About
            <span className="inline-block ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="cursor-pointer group">
          <Link
            href="#header"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
            <span className="inline-block ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="block md:hidden">
        <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
