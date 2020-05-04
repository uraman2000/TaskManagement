import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Box, ClickAwayListener, Typography, CssBaseline, Paper, Divider, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    width: 300,
    padding: theme.spacing(1, 1, 1),
    top: "63%",
    left: "78.2%",
    transform: `translate(-50%, -50%)`
  },
  paper: {
    padding: theme.spacing(2, 2, 2)
  }
}));

export default function AddCheckList() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  //const [modalStyle] = React.useState(getModalStyle);

  return (
    <Box zIndex="tooltip" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6">Add Checklist</Typography>
        <Divider />
        
        <TextField id="standard-name" label="Name" margin="normal" />
      </Paper>
    </Box>
  );
}
