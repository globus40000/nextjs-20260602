import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <main className="grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
