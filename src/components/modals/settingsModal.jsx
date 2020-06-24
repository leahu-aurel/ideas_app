import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addNameOnServer } from "../../redux/actions/asyncActionCreators";
import useFileUpload from "../hooks/useFileUpload";
import { useName } from "../hooks/useName";

export default function FormDialog({ children }) {
  const user = useSelector((state) => state.user);
  console.log(user.uid);
  const displayName = useName(user.uid);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };
  const handleSubmit = () => {
    dispatch(addNameOnServer(name));
    setOpen(false);
  };

  const [name, setName] = useState("");
  useEffect(() => {
    setName(displayName);
  }, [displayName]);

  console.log(name);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleFileUpload = useFileUpload();

  return (
    <div>
      <Box onClick={handleOpen}>{children}</Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To modify your personal data, save the changes.
          </DialogContentText>
          <Button variant="contained" component="label">
            Upload File
            <input
              onChange={handleFileUpload}
              type="file"
              style={{ display: "none" }}
            />
          </Button>
          <TextField
            margin="dense"
            id="idea"
            label="Full Name"
            fullWidth
            required
            multiline
            value={name}
            onChange={handleChange}
            inputProps={{
              maxLength: 140,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
