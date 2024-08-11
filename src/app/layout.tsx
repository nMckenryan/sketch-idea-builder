import "~/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import { DialogPopup } from "~/components/dialog-popup";

export const metadata: Metadata = {
  title: "Sketch Idea Builder",
  description: "By Nigel Mckenzie-Ryan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <DialogPopup />
        {children}
      </body>
    </html>
  );
}
