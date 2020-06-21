import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import moment from "moment";

export default ({ text, img, time }) => {
  console.log("here");
  const name = useSelector((state) => state.user).displayName;
  return (
    <Box mt={4}>
      <Card>
        <CardHeader
          avatar={<Avatar className="menuAvatar" alt="" src={img} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={moment(time).fromNow()}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
