import React, { FC } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SideNav } from "./SideNav";
import { Box } from "@material-ui/core";

const drawerWidth = 16 + 35 + 16;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100vh",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
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
      // display: "flex",
      // flexDirection: "column",
    },
    toolBar: {
      display: "flex",
    },
    appBarTitle: {
      flexGrow: 1,
    },
  })
);

export const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SideNav></SideNav>
      </Drawer>
      <Box display="flex" flexDirection="column" flexGrow={1} p={3}>
        {/* <TextField
          variant="outlined"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon></SearchIcon>
              </InputAdornment>
            ),
          }}
        ></TextField> */}
        <main className={classes.content}>{children}</main>
      </Box>
    </div>
  );
};
