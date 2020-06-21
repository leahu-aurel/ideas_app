import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import UserMenu from "../auth/userMenu";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Button color="inherit">
            <Link color="inherit" href="/" style={{ textDecoration: "none" }}>
              Ideas
            </Link>{" "}
          </Button>
        </Typography>
        {user ? (
          <>
            <UserMenu />
          </>
        ) : (
          <>
            <Button color="inherit">
              {" "}
              <Link
                color="inherit"
                href="/sign_in"
                style={{ textDecoration: "none" }}
              >
                Sign In
              </Link>
            </Button>
            <Box ml={3}>
              <Button color="inherit">
                {" "}
                <Link
                  color="inherit"
                  href="/sign_up"
                  style={{ textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
