import { LoginForm } from "@/components/LoginForm/login-form";
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
    <div className="flex justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
