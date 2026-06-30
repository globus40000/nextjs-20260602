"use client";

import { FormInput } from "@/components/FormInput/form-input";
import { SubmitButton } from "@/components/SubmitButton/submit-button";
import { loginAction } from "@/server-actions/login-action";
import { FC, useActionState, useEffect } from "react";

export const LoginForm: FC = () => {
  const [state, formAction, isPending] = useActionState(loginAction, {});
  const { error, fields, redirectTo } = state;

  useEffect(() => {
    if (redirectTo) {
      window.location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div>
      <form className="flex flex-col gap-6" action={formAction}>
        <FormInput
          type="text"
          name="login"
          label="Login"
          required
          disabled={isPending}
          defaultValue={fields?.login ?? ""}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          required
          disabled={isPending}
          defaultValue={fields?.password ?? ""}
        />
        <SubmitButton disabled={isPending} isLoading={isPending} />
        {error && <div className="text-red-400">{error}</div>}
      </form>
    </div>
  );
};
