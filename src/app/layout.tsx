import { Inter } from "next/font/google";
import "./global.css";
import AsideContainer from "./components/AsideContainer/AsideContainer";
import Navigator from "./components/Navigator/Navigator";
import styles from "./layout.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Diniz | Portfolio",
  description: "This is Gabriel Diniz's portfolio website.",
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.mainContainer}>
          <AsideContainer />
          <Navigator />
          {children}
        </div>
      </body>
    </html>
  );
}
