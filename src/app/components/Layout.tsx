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
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
    bottomBar: {
      top: "auto",
      bottom: 0,
    },
  })
);

export const Layout: FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("sm"));

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

      {smallDevice && (
        <AppBar position="sticky" color="primary" className={classes.bottomBar}>
          <BottomNavigation>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          </BottomNavigation>
        </AppBar>
      )}
    </div>
  );
};
