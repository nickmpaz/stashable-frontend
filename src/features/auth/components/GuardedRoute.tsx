import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

export interface GuardedRouteProps extends React.ComponentProps<typeof Route> {
  authenticated: boolean;
  redirectUrl: string;
}

export const GuardedRoute: FC<GuardedRouteProps> = ({
  authenticated,
  redirectUrl,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        return authenticated ? children : <Redirect to={redirectUrl} />;
      }}
    />
  );
};
