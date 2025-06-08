import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Lloyd Gene Alcantara | Software Developer Portfolio",
  description: "Accomplished Full Stack Web Developer with expertise in Vue.js, React.js, PHP, and Python. Experienced in creating scalable web applications and AI-powered solutions.",
  keywords: "software developer, full stack developer, Vue.js, React.js, PHP, Python, web development, Lloyd Alcantara",
  authors: [{ name: "Lloyd Gene Alcantara" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-gray-900 text-gray-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
