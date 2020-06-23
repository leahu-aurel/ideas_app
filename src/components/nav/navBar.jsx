import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import UserMenu from "../auth/userMenu";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const pushToSearch = () => {
    history.push("/search");
  };
  const pushToHome = () => {
    history.push("/");
  };
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={pushToHome}
          aria-label="menu"
        >
          <HomeIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={pushToSearch}
          >
            <SearchRoundedIcon />
          </IconButton>
        </Typography>
        {user ? (
          <>
            <UserMenu id={user.uid} />
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
