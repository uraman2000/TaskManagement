import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import TaskModal from "./TaskModal";
import { Card, CardContent, Typography, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const styles = {
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
};

class Column extends Component<IColumnProps, IColumnState> {
  constructor(props: IColumnProps) {
    super(props);

    this.state = {
      open: false
    };
    this.taskList = this.taskList.bind(this);
    this.taskClickHandler = this.taskClickHandler.bind(this);
    this.taskCloseHandler = this.taskCloseHandler.bind(this);
  }

  taskClickHandler(e: any) {
    e.preventDefault();
    this.setState({ open: true });
  }

  taskCloseHandler(e: any) {
    this.setState({ open: false });
  }
  taskList() {
    return this.props.task.map((item: any, index: any) => {
      return <Task onClick={this.taskClickHandler} key={item.id} task={item} index={index} />;
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid>
          <Card className={classes.container}>
            {/* <CardHeader title={this.props.column.title}></CardHeader> */}

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.column.title}
              </Typography>
              <Droppable droppableId={this.props.column.id} type="TASK">
                {(provided: any, snapshot: any) => (
                  <Box
                    className={classes.TaskList}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {this.taskList()}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </CardContent>
          </Card>
        </Grid>
        <TaskModal open={this.state.open} taskCloseHandler={this.taskCloseHandler} />
      </div>
    );
  }
}
export default withStyles(styles)(Column);

interface IColumnProps {
  key: string;
  column: any;
  task: any;
  classes: any;
}

interface IColumnState {
  open: boolean;
}
