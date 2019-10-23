import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import TaskModal from "./TaskModal";
import { Card, CardContent, Typography, Grid, Box, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  container: {
    width: 220,
    backgroundColor: grey[50],
    borderRadius: "20px"
  },
  TaskList: {
    padding: "8px",
    transition: "background-color 0.2s ease",
    flexGrow: 1,
    minHeight: "100px"
  }
});

export default function Column(props: IColumnProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<IColumnState>();

  const taskClickHandler = (e: any) => {
    // e.preventDefault();
    // this.setState({ open: true });
    setOpen(true);
    setState(e);
  };

  const taskCloseHandler = (e: any) => {
    setOpen(false);
  };
  const taskList = () => {
    return props.task.map((item: any, index: any) => {
      return <Task onClick={() => taskClickHandler(item)} key={item.id} task={item} index={index} />;
    });
  };

  return (
    <div>
      <Grid>
        <Card className={classes.container}>
          {/* <CardHeader title={this.props.column.title}></CardHeader> */}

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.column.title}
            </Typography>
            <Droppable droppableId={props.column.id} type="TASK">
              {(provided: any, snapshot: any) => (
                <Box
                  className={classes.TaskList}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {taskList()}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </CardContent>
        </Card>
      </Grid>
      {open ? <TaskModal item={state} open={open} taskCloseHandler={taskCloseHandler} /> : null}
    </div>
  );
}

interface IColumnProps {
  key: string;
  column: any;
  task: any;
}

interface IColumnState {
  id: string;
  title: string;
  description: string;
}
