import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "QurbaniHat",
  description: "A modern livestock marketplace for Qurbani animals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
