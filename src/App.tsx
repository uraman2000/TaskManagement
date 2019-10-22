import React, { Component } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskModal from "./components/TaskModal";
import { Button, Box, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const initData: IAppProps = {
  tasks: {
    "task-1": { id: "task-1", title: "Take out the garbage", description: "this is desc" },
    "task-2": { id: "task-2", title: "Watch my favorite show", description: "this is desc" },
    "task-3": { id: "task-3", title: "Charge my phone", description: "this is desc" },
    "task-4": { id: "task-4", title: "Cook dinner", description: "this is desc" }
  },
  columns: {
    "column-1": {
      id: "column-1",

      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"]
};

class App extends Component {
  state = initData;

  onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  };

  getData() {
    return this.state.columnOrder.map((columnId: any) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map((taskId: any) => this.state.tasks[taskId]);
      return (
        <Box p={1}>
          <Column key={column.id} column={column} task={tasks} />
        </Box>
      );
    });
  }
  //9 am thurs 11fr
  render() {
    // const classes = this.props.classes;

    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
          {/* <Box display="flex" justifyContent="flex-start"> */}
          <Box display="flex" alignItems="flex-start">
            {this.getData()}
            <Box mt={2}>
              <Fab variant="extended" size="medium" color="primary" aria-label="add">
                <AddIcon />
                add item
              </Fab>
            </Box>
          </Box>
        </DragDropContext>

        {/* <AppDrawer /> */}
        {/* <AppBar /> */}
        {/* {this.getData} */}
        {/* <DragDropContext onDragEnd={this.onDragEnd}>{this.getData}</DragDropContext> */}
      </div>
    );
  }
}

export default App;

interface IAppProps {
  columnOrder: any;
  tasks: any;
  columns: any;
}
