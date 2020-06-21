import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addIdea } from "../../redux/actions/syncActionCreators";

export default function FormDialog({ children }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const handleSubmit = () => {
    dispatch(addIdea(idea));
    setIdea("");
    setOpen(false);
  };

  const [idea, setIdea] = useState("");
  const handleChange = (e) => {
    setIdea(e.target.value);
  };

  return (
    <div>
      <Box onClick={handleOpen}>{children}</Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new idea</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new idea, add your idea below and submit it.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="idea"
            label="Your idea:"
            fullWidth
            required
            multiline
            value={idea}
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
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
