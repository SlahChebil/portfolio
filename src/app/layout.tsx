"usel client";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slah Chebil",
  description: "Slah Chebil Resume",
};

// export const viewPort : Viewport = {
//   initialScale: 1,
//   width: "device-width",

// };

// width=device-width, initial-scale=1.0
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
      <script defer data-website-id="671f6da5b6741e3ac9fbfb27" data-domain="portfolio-slahs-projects-af0602ac.vercel.app" src="https://datafa.st/js/script.js"></script>
    </Head>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
