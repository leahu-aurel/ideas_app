import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Box } from "@material-ui/core";
import { useURL } from "../hooks/useURL";
import { useSelector } from "react-redux";
import { isFollowed } from "../../utils/isFollowed";
import { handleFollow } from "../../utils/handleFollow";
import { useName } from "../hooks/useName";
export default ({ id }) => {
  const name = useName(id);
  console.log(id);
  const url = useURL(id);
  console.log(url);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      isFollowed(user.uid, id).then((res) => {
        setFollowed(res);
      });
    }
  }, [user, id]);

  const [color, setColor] = useState("inherit");
  const [followed, setFollowed] = useState(false);
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
            user &&
            user.uid !== id && (
              <>
                <IconButton onClick={handleFollowClick} aria-label="settings">
                  <FavoriteIcon color={color} />
                </IconButton>
              </>
            )
          }
          title={name}
        />
      </Card>
    </Box>
  );
};
