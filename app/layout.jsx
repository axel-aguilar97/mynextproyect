import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "My app",
};

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
