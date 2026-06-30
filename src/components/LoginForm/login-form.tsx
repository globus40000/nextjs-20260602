import { FormInput } from "@/components/FormInput/form-input";
import { SubmitButton } from "@/components/SubmitButton/submit-button";
import { FC } from "react";

export const LoginForm: FC = () => {
  return (
    <div>
      <form className="flex flex-col gap-6">
        <FormInput type="text" name="login" label="Login" required />
        <FormInput type="password" name="password" label="Password" required />
        <SubmitButton />
      </form>
    </div>
  );
};
