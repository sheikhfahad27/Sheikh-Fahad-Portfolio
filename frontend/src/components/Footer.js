
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080b14] border-t border-white/10 px-6 md:px-16 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Fahad<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-sm">
              Full Stack MERN Developer passionate about
              building modern web applications.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/about" className="hover:text-blue-400">About</Link>
              <Link href="/projects" className="hover:text-blue-400">Projects</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Location
            </h3>

            <p className="text-gray-400">Karachi, Pakistan</p>
            <p className="text-gray-400 mt-2">Available for opportunities</p>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sheikh Fahad. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
