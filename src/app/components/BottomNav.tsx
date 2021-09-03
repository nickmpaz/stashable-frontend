import React, { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNav: {
      top: "auto",
      bottom: 0,
    },
  })
);

export interface BottomNavProps {
  navOptions: {
    label: string;
    route: string;
    icon: React.ReactNode;
  }[];
}

export const BottomNav: FC<BottomNavProps> = ({ navOptions }) => {
  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
  };
  return (
    <AppBar position="sticky" color="primary" className={classes.bottomNav}>
      <BottomNavigation value={location.pathname} onChange={handleChange}>
        {navOptions.map((option) => {
          return (
            <BottomNavigationAction
              label={option.label}
              value={option.route}
              icon={option.icon}
            />
          );
        })}
      </BottomNavigation>
    </AppBar>
  );
};
