/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import ls from 'local-storage';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  let admin;
  if (ls.get('clientId') === 1 ) {
	admin = [
      <ListItem className={classes.listItem}>
        <Link to="/supplier-page" className={classes.dropdownLink}
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          Add Suppliers/Products
        </Link>
      </ListItem>
	]
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.dropdownLink}
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          All Events
        </Link>
      </ListItem>

	  {admin}

      <ListItem className={classes.listItem}>
        <Link to="/event-page" className={classes.dropdownLink}
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          Create Events
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Profile"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/profile-page" className={classes.dropdownLink}>
              My Profile
            </Link>,
            <Link to="/login-page" className={classes.dropdownLink}
             onClick={() => { ls.set('clientId', null); }}>
              Sign Out
          </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/login-page" className={classes.dropdownLink}
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          Log In
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
