import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-white">QurbaniHat</h2>

          <p className="mt-4 max-w-sm leading-7 text-gray-400">
            A trusted livestock booking platform that helps families find
            healthy and suitable animals for Qurbani.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-3">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/animals" className="hover:text-white">
              All Animals
            </Link>

            <Link href="/my-profile" className="hover:text-white">
              My Profile
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>

          <div className="mt-4 space-y-3 text-gray-400">
            <p>Email: support@qurbanihat.com</p>
            <p>Phone: +880 1XXX-XXXXXX</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="mt-5 flex gap-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>

            <a href="#" className="hover:text-white">
              Instagram
            </a>

            <a href="#" className="hover:text-white">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-4 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
