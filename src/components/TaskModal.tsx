import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Theme,
  makeStyles,
  createStyles,
  Paper,
  Grid,
  TextField,
  Typography,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  Box
} from "@material-ui/core";
import CustomTitle from "./CustomTitle";
import DescriptionIcon from "@material-ui/icons/Description";
import ModalList from "./ModalList";
import { grey } from "@material-ui/core/colors";
import AddCheckList from "./AddCheckList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textAreaButton: {
      ...theme.typography.button,
      backgroundColor: grey[200],
      padding: theme.spacing(1),
      minHeight: "40px",
      display: "block",
      textAlign: "left",
      width: "100%",
      textTransform: "none",
      whiteSpace: "pre-line"
    },
    overFLowRemove: {
      overflow: "Hidden"
    }
  })
);

export default function TaskModal(props: ITaskModalProps) {
  const [open, setOpen] = React.useState(false);
  const [openTextArea, setopenTextArea] = React.useState(false);
  const [textAreaInput, setTextAreaInput] = React.useState(props.item.description);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    props.taskCloseHandler(open);
  };

  useEffect(() => {
    setOpen(props.open);
  });

  const handleTextArea = () => {
    setopenTextArea(true);
  };

  const onOutFocus = () => {
    setopenTextArea(false);
  };

  const handleTextFieldChange = (e: any) => {
    setTextAreaInput(e.target.value);
  };

  return (
    <Paper>
      <Box>
        <AddCheckList />
      </Box>

      <Box style={{ position: "absolute" }}>
        <Dialog
          fullWidth={true}
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
          scroll={"body"}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">
            <CustomTitle isUpperCase={false} title={props.item.title} />
          </DialogTitle>

          <DialogContent>
            <Grid container spacing={1} direction="row" alignItems="center">
              <Grid item>
                <DescriptionIcon />
                <TextField id="standard-name" label="Name" margin="normal" />
              </Grid>
              <Grid item>
                <Typography variant="h6">Description</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} className={classes.overFLowRemove}>
              <Grid item xs={9}>
                <Box ml={4}>
                  {!openTextArea ? (
                    <Typography noWrap onClick={handleTextArea} className={classes.textAreaButton}>
                      {textAreaInput ? textAreaInput : "Add a more detailed description…"}
                    </Typography>
                  ) : (
                    <TextField
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
                </Box>
              </Grid>
              <Grid item xs>
                <ModalList />
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
      </Box>
    </Paper>
  );
}

interface ITaskModalProps {
  open: any;
  taskCloseHandler: any;
  item: any;
}
