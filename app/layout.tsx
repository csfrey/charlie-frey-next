import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
const font = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Charlie Frey",
  description: "Crafting the next generation of software solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-slate-900 text-green-500 min-h-screen `}
      >
        <div className="p-2 h-screen box-border">
          <fieldset
            className="h-full border-2 border-green-500 p-4 overflow-y-scroll scroll-bg-none"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#22c55e #0f172a",
            }}
          >
            <legend>
              <Link href="/">charliefrey.io</Link>
            </legend>
            {children}
          </fieldset>
        </div>
      </body>
    </html>
  );
}
