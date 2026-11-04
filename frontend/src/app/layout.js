import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sheikh Fahad | Full Stack MERN Developer",
  description:
    "Official portfolio of Sheikh Fahad, Full Stack MERN Developer from Karachi, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col bg-[#080b14] text-white">

   <Preloader />
  <CustomCursor />

  <Navbar />

  <div className="flex-grow">
    <PageTransition>{children}</PageTransition>
  </div>

  <Footer />

</body>
    </html>
  );
}
