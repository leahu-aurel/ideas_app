import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import { useImage } from "../main/hooks/useImage";
import { useHistory } from "react-router-dom";
import getPhotoURL from "../../utils/getPhotoURL";
export default ({ image, id, displayName }) => {
  const url = getPhotoURL(id, image);
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
