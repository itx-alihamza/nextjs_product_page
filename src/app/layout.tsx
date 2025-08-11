import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins', // CSS variable name
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Product Page",
  description: "Helmet Product Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${poppins.variable} antialiased`}

      >
        {children}
      </body>
    </html>
  );
}
