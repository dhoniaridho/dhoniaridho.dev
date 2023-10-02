"use client";
import "./globals.css";
import { Providers } from "./providers";
import { Button } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Ahmad Ridhoni</title>
      </head>
      <body className="bg-[#4e27b0]">
        <nav className="bg-[#4e27b0]/50 backdrop-blur-lg w-full top-0 border-b border-white/50 z-30 sticky">
          <div className=" flex justify-between items-center max-w-screen-xl mx-auto h-20 px-5 md:px-0">
            <h1 className="font-righteous text-2xl">DHONIARIDHO.</h1>
            <ul className="hidden gap-10 uppercase md:flex">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Works</li>
              <li>Service</li>
            </ul>
            <Button
              variant="bordered"
              color="secondary"
              className="text-white"
              onClick={() => {
                window.location.href = "mailto:dhoniaridho@gmail.com";
              }}
            >
              Contact Us
            </Button>
          </div>
        </nav>
        <main>
          <Providers>{children}</Providers>
        </main>
        <footer className="border-t border-white/20">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20">
            <div></div>
            <div className="font-righteous">dhoniaridho.</div>
            <div></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
