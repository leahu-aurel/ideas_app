import React from "react";
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
import useName from "../hooks/useName";
import { useImage } from "../hooks/useImage";
import { useURL } from "../hooks/useURL";
export default ({ idea, id }) => {
  const name = useName(id);
  const img = useImage(id);
  const url = useURL(id, img);

  return (
    <Box mb={3} width="100%">
      <Card>
        <CardHeader
          avatar={<Avatar className="menuAvatar" alt="" src={url} />}
          action={
            <IdeaMenu idea={idea}>
              <IconButton aria-label="settings">
                {" "}
                <MoreVertIcon />
              </IconButton>
            </IdeaMenu>
          }
          title={name}
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
