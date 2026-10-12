
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white sm:px-10 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Orange accent */}
        <div className="mb-10 h-1 w-24 bg-orange-500" />

        {/* Footer content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo and description */}
          <div className="max-w-md">
            <Link to="/" className="text-2xl font-bold">
              audiophile
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Bringing you the best audio gear to elevate your listening
              experience. Discover headphones, speakers, and earphones
              designed for exceptional sound.
            </p>
          </div>

          
{/* Footer Navigation */}
<nav aria-label="Footer navigation" className="w-full md:w-auto">
  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
    Explore
  </p>

  <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-4 md:grid md:grid-cols-1 md:gap-4">
    <li>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:text-orange-500"
      >
        <span className="h-1 w-1 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/headphones"
        className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:text-orange-500"
      >
        <span className="h-1 w-1 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />
        Headphones
      </Link>
    </li>

    <li>
      <Link
        to="/speakers"
        className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:text-orange-500"
      >
        <span className="h-1 w-1 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />
        Speakers
      </Link>
    </li>

    <li>
      <Link
        to="/earphones"
        className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:text-orange-500"
      >
        <span className="h-1 w-1 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />
        Earphones
      </Link>
    </li>
  </ul>
</nav>

        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-col gap-6 border-t border-gray-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Audiophile. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="transition hover:text-orange-500"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="transition hover:text-orange-500"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="transition hover:text-orange-500"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
