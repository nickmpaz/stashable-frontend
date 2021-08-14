import React, { FC } from "react";
import { LoginButton } from "../../features/auth/components/LoginButton";
import { LogoutButton } from "../../features/auth/components/LogoutButton";

export const LoginView = () => {
  return (
    <>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </>
  );
};
