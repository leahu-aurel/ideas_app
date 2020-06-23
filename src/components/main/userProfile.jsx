import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Box } from "@material-ui/core";
import { useImage } from "../hooks/useImage";
import { useURL } from "../hooks/useURL";
import { useSelector } from "react-redux";
export default ({ id }) => {
  const [color, setColor] = useState("inherit");
  const followed = true;

  useEffect(() => {
    followed ? setColor("secondary") : setColor("inherit");
  }, [followed]);
  const img = useImage(id);
  const url = useURL(id, img);
  const user = useSelector((state) => state.user);
  return (
    <Box mb={6} width="100%">
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={url}></Avatar>}
          action={
            user.uid !== id && (
              <>
                <IconButton aria-label="settings">
                  <FavoriteIcon color={color} />
                </IconButton>
              </>
            )
          }
          title="Aurel Leahu"
        />
      </Card>
    </Box>
  );
};
