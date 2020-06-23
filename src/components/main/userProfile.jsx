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
import { isFollowed } from "../../utils/isFollowed";
import { handleFollow } from "../../utils/handleFollow";
export default ({ id }) => {
  const img = useImage(id);
  const url = useURL(id, img);
  const user = useSelector((state) => state.user);

  const [color, setColor] = useState("inherit");
  const [followed, setFollowed] = useState(false);
  useEffect(() => {
    console.log("here");
    isFollowed(user.uid, id).then((res) => {
      console.log(res);
      console.log("here");
      setFollowed(res);
    });
  }, [user.uid, id]);

  useEffect(() => {
    followed ? setColor("secondary") : setColor("inherit");
  }, [followed]);

  const handleFollowClick = () => {
    handleFollow(id, !followed);
    setFollowed(!followed);
  };
  return (
    <Box mb={6} width="100%">
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={url}></Avatar>}
          action={
            user.uid !== id && (
              <>
                <IconButton onClick={handleFollowClick} aria-label="settings">
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
