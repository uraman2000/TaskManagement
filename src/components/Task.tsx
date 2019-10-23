import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid lightgrey",
    borderRadius: "16px",
    padding: "8px",
    marginBottom: "8px",
    transition: "background-color 0.2s ease"
  },
  paper: {
    borderRadius: "16px",
    backgroundColor: "#ffff"
  }
});

export default function Task(props: ITaskProps) {
  const classes = useStyles();
  return (
    <Box className={classes.paper} onClick={props.onClick}>
      <Draggable draggableId={props.task.id} index={props.index}>
        {(provided: any, snapshot: any) => (
          <Box
            className={classes.root}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {props.task.title}
          </Box>
        )}
      </Draggable>
    </Box>
  );
}

interface ITaskProps {
  key: any;
  task: any;
  index: any;
  onClick: any;
}
