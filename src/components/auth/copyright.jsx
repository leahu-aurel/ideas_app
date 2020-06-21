import React from "react";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
export default () => (
  <Box mt={3}>
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/leahu-aurel">
        Github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </Box>
);
