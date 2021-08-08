import React, { FC } from "react";
import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";

export const LoginContainer = () => {
  return (
    <>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </>
  );
};
