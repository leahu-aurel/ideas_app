import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../auth/styles";
import { queryUsers } from "../../utils/queryUsers";
import User from "./user";
export default () => {
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState("");
  const classes = useStyles();

  const handleQueryChange = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      queryUsers(e.target.value).then((queries) => {
        queries ? setQueryResults(queries) : setQueryResults("");
      });
    }

    setQuery(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Search
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={query}
            onChange={handleQueryChange}
            label="Search"
            id="search"
            autoComplete="current-search"
          />
          <Grid container justify="center">
            {queryResults ? (
              <>
                {queryResults.map((user) => (
                  <User key={user.id} {...user} />
                ))}
              </>
            ) : (
              <>
                <Grid item>Found profiles</Grid>
              </>
            )}
          </Grid>
        </form>
      </div>
    </Container>
  );
};
