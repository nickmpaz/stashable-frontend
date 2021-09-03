import React, { FC } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SideNav } from "./SideNav";
import { Box } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { BottomNav } from "./BottomNav";
import { BOOK, LIBRARY, SEARCH, SETTINGS } from "../definitions/routes";
import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 16 + 35 + 16;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootLargeDevice: {
      display: "flex",
      height: "100vh",
    },
    rootSmallDevice: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      overflow: "hidden",
    },
    content: {
      flexGrow: 1,
    },
  })
);

export const Layout: FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const navOptions = [
    {
      label: "Search",
      route: SEARCH,
      icon: <SearchIcon />,
    },
    {
      label: "Library",
      route: LIBRARY,
      icon: <LibraryBooksIcon />,
    },
    {
      label: "Social",
      route: LIBRARY,
      icon: <PeopleIcon />,
    },
    {
      label: "Settings",
      route: SETTINGS,
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div
      className={
        smallDevice ? classes.rootSmallDevice : classes.rootLargeDevice
      }
    >
      <CssBaseline />
      {!smallDevice && (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SideNav></SideNav>
        </Drawer>
      )}
      <Box display="flex" flexDirection="column" flexGrow={1} p={3}>
        <main className={classes.content}>{children}</main>
      </Box>

      {smallDevice && <BottomNav navOptions={navOptions}></BottomNav>}
    </div>
  );
};
