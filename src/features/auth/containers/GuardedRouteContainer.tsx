import React, { FC } from "react";
import { Route } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks/hooks";
import { selectAuthenticated } from "../store/authSlice";
import { GuardedRoute } from "../components/GuardedRoute";
import { LOGIN } from "../../../app/definitions/routes";

export const GuardedRouteContainer: FC<React.ComponentProps<typeof Route>> = ({
  children,
  ...rest
}) => {
  const authenticated = useAppSelector(selectAuthenticated);
  const redirectUrl = LOGIN;
  return (
    <GuardedRoute
      authenticated={authenticated}
      redirectUrl={redirectUrl}
      {...rest}
    >
      {children}
    </GuardedRoute>
  );
};
