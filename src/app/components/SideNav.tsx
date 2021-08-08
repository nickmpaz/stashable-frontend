import React, { FC } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useHistory, useLocation } from "react-router-dom";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import { Box } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import firebase from "firebase";

export const SideNav: FC = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <List>
      <ListItem button>
        <ListItemIcon onClick={() => history.push("/search")}>
          <Box my={1}>
            <SearchIcon
              color={location.pathname === "/search" ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={() => history.push("/library")}>
          <Box my={1}>
            <LibraryBooksIcon
              color={location.pathname === "/library" ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={() => history.push("/library")}>
          <Box my={1}>
            <PeopleIcon
              color={location.pathname === "/social" ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={() => history.push("/settings")}>
          <Box my={1}>
            <SettingsIcon
              color={location.pathname === "/settings" ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={() => firebase.auth().signOut()}>
          <Box my={1}>
            <ExitToAppIcon fontSize="large" />
          </Box>
        </ListItemIcon>
      </ListItem>
    </List>
  );
};
