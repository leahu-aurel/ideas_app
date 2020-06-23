import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useURL } from "../hooks/useURL";
export default ({ image, id, displayName }) => {
  const url = useURL(id, image);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${id}`);
  };
  return (
    <Box mt={4} width="100%">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              onClick={handleClick}
              className="menuAvatar"
              alt=""
              src={url}
            />
          }
          title={displayName}
        />
      </Card>
    </Box>
  );
};
