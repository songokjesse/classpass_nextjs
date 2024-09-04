import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClassPass",
  description: "Class Pass capture class attendance",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
        <html lang="en" data-theme="cupcake">
          <body className={inter.className}>
          <Navbar/>
          {children}
          </body>
        </html>
      </ClerkProvider>
  );
}
