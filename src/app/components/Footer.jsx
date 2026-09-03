import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-green-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">QurbaniHat</h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
            A trusted livestock marketplace where you can explore healthy
            animals for your Qurbani from different locations.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>

          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p>Email: support@qurbanihat.com</p>
            <p>Phone: +880 1XXX-XXXXXX</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>

          <div className="mt-4 flex gap-4">
            <Link
              href="#"
              className="rounded-full bg-green-800 p-3 hover:bg-green-700"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="rounded-full bg-green-800 p-3 hover:bg-green-700"
            >
              <FaInstagram />
            </Link>

            <Link
              href="#"
              className="rounded-full bg-green-800 p-3 hover:bg-green-700"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-green-900 py-5 text-center text-sm text-gray-400">
        © 2026 QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
