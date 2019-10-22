import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskModal from "./TaskModal";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  Grid,
  CardHeader
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const Container2 = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px;
`;

const styles = {
  container: {
    width: 220
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
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {this.taskList()}
                    {provided.placeholder}
                  </TaskList>
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
