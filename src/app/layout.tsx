import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
// import "../styles/skins/yellow.css";
import "/styles/skins/yellow.css";

import Providers from "@/containers/providers";
import NavBar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import Switcher from "@/components/Switcher";
import Head from "next/head";

//css
// import "./../../styles/devicon.min.css";
// import "./../../styles/bootstrap.min.css";
// import "./../../styles/swiper-bundle.min.css";
// import "./../../styles/animate.min.css";
// import "./../../styles/jquery.mCustomScrollbar.min.css";
import "./../../styles/style.css";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ScrollBar from "@/components/ScrollBar";
//css

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Frontend | Advance",
  description: "Frontend Advance Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Alberto Pérez dev Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body className={`${sora.variable} font-Sora antialiased`}>
        <Providers>
          {/* <Preloader /> */}
          <Header />
          <NavBar />

          {/* <Switcher /> */}
          {children}
          {/* <ThemeSwitch /> */}

          <ScrollBar />
        </Providers>
      </body>
    </html>
  );
}
