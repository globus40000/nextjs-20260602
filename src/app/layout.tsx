import { FC, PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader height={2} color="#51A2FF" />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
