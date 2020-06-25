import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box } from "@material-ui/core";
import moment from "moment";
import IdeaMenu from "./ideaMenu";
import { useName } from "../hooks/useName";
import { useImage } from "../hooks/useImage";
import { useURL } from "../hooks/useURL";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
export default ({ idea }) => {
  const [showMenu, toggleMenu] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    user && user.uid === idea.userID && toggleMenu(true);
  }, [user, idea]);

  const name = useName(idea.userID);
  const img = useImage(idea.userID);
  const url = useURL(idea.userID, img);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${idea.userID}`);
  };
  return (
    <Box mt={2} mb={2} width="100%">
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
          action={
            showMenu && (
              <>
                <IdeaMenu idea={idea}>
                  <IconButton aria-label="settings">
                    {" "}
                    <MoreVertIcon />
                  </IconButton>
                </IdeaMenu>
              </>
            )
          }
          title={
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/${idea.userID}`}
            >
              {name}
            </Link>
          }
          subheader={moment(idea.time).fromNow()}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            {idea.text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
