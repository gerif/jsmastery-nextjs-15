"use client";
import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const Page = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <AuthForm
        formType={"SIGN_IN"}
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default Page;
