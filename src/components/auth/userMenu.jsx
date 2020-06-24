import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import "./userMenu.css";
import { Link } from "react-router-dom";
import AddModal from "../modals/addModal";
import SettingsModal from "../modals/settingsModal";
import { useURL } from "../hooks/useURL";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({ id }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const url = useURL(id);
  return (
    <div>
      <Avatar className="menuAvatar" onClick={handleClick} alt="" src={url} />
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/${id}`} style={{ textDecoration: "none", color: "black" }}>
          <StyledMenuItem>
            <ListItemIcon>
              <PermIdentityIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledMenuItem>
        </Link>
        <AddModal>
          <StyledMenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="New Idea" />
          </StyledMenuItem>
        </AddModal>
        <SettingsModal>
          <StyledMenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </StyledMenuItem>
        </SettingsModal>

        <Link to="/log_out" style={{ textDecoration: "none", color: "black" }}>
          <StyledMenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
