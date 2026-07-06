import { Link } from "@/components/common/Link/link";
import { LoginForm } from "@/components/common/LoginForm/login-form";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Вход — TENNIS STORE",
  robots: {
    index: false,
    follow: false,
  },
};

const LoginPage: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-medium mb-9">Вход</h1>
      <LoginForm />
      <p className="text-sm text-gray-600 mt-8">
        Впервые у нас?{" "}
        <Link href="/signup" className="text-blue-500">
          Создать аккаунт
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
