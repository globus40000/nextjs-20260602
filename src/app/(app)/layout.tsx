import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/common/Header/header";
import { Footer } from "@/components/common/Footer/footer";
import { getCurrentUser } from "@/services/auth/get-current-user";
import { AuthContextProvider } from "@/providers/AuthContextProvider/auth-context-provider";

export const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const { data: user } = await getCurrentUser();

  return (
    <AuthContextProvider user={user}>
      <div className="min-h-screen flex flex-col">
        <header className="px-5 border-b border-gray-200">
          <Header />
        </header>
        <main className="px-5 py-13 grow">{children}</main>
        <footer className="px-5 border-t border-gray-200">
          <Footer />
        </footer>
      </div>
    </AuthContextProvider>
  );
};

export default Layout;
