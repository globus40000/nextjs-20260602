import { Link } from "@/components/common/Link/link";
import { SignupForm } from "@/components/common/SignupForm/signup-form";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Регистрация — TENNIS STORE",
  robots: {
    index: false,
    follow: false,
  },
};

const SignupPage: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-medium mb-9">Регистрация</h1>
      <SignupForm />
      <p className="text-sm text-gray-600 mt-8">
        Уже есть аккаунт?{" "}
        <Link href="/login" className="text-blue-500">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
