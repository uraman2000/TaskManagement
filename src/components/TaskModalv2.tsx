import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import { timeout } from "q";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textAreaButton: {
      ...theme.typography.button,
      backgroundColor: "rgba(9,30,66,.04)",
      padding: theme.spacing(1),
      minHeight: "40px",
      display: "block",
      textAlign: "left",
      width: "100%",
      textTransform : "none"
    },
    textAreaTextField: {
      //   minHeight: "108px"
    }
  })
);

export default function TaskModalv2() {
  const [open, setOpen] = React.useState(false);
  const [openTextArea, setopenTextArea] = React.useState(false);
  const [textAreaInput, setTextAreaInput] = React.useState("");
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setopenTextArea(false);
  };

  const handleTextArea = () => {
    setopenTextArea(true);
  };

  //   useEffect(() => {
  //     if (textAreaRef !== undefined) {
  //       console.log(textAreaRef);
  //       textAreaRef.focus();
  //     }
  //   });

  const onOutFocus = () => {
    setopenTextArea(false);
  };

  const handleTextFieldChange = (e: any) => {
    setTextAreaInput(e.target.value);
  };
  return (
    <Paper>
      <Button onClick={handleClickOpen}>scroll=body</Button>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        scroll={"body"}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title"> Title</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              {!openTextArea ? (
                <Button onClick={handleTextArea} className={classes.textAreaButton}>
                  {textAreaInput ? textAreaInput : "Add a more detailed description…"}
                </Button>
              ) : (
                <TextField
                  className={classes.textAreaTextField}
                  fullWidth
                  rows="8"
                  onBlur={onOutFocus}
                  value={textAreaInput}
                  onChange={(e: any) => handleTextFieldChange(e)}
                  autoFocus
                  id="filled-dense-multiline"
                  label="Description"
                  margin="dense"
                  variant="outlined"
                  multiline
                />
              )}
            </Grid>
            <Grid item xs>
              <Paper>xs</Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
