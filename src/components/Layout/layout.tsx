import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
