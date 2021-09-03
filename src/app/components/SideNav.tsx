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
import { LIBRARY, SEARCH, SETTINGS, SOCIAL } from "../definitions/routes";

export const SideNav: FC = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <List>
      <ListItem button onClick={() => history.push(SEARCH)}>
        <ListItemIcon>
          <Box my={1}>
            <SearchIcon
              color={location.pathname === SEARCH ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
      <ListItem button onClick={() => history.push(LIBRARY)}>
        <ListItemIcon>
          <Box my={1}>
            <LibraryBooksIcon
              color={location.pathname === LIBRARY ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
      <ListItem button onClick={() => history.push(SOCIAL)}>
        <ListItemIcon>
          <Box my={1}>
            <PeopleIcon
              color={location.pathname === SOCIAL ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
      <ListItem button onClick={() => history.push(SETTINGS)}>
        <ListItemIcon>
          <Box my={1}>
            <SettingsIcon
              color={location.pathname === SETTINGS ? "primary" : undefined}
              fontSize="large"
            />
          </Box>
        </ListItemIcon>
      </ListItem>
    </List>
  );
};
