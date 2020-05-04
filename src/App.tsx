import React, { Component, useState } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import AppBar from "./components/AppBar/AppBar";
import { Box, Fab, Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const initData: IAppProps = {
  tasks: {
    "task-1": { id: "task-1", title: "Take out the garbage", description: "this is desc" },
    "task-2": { id: "task-2", title: "Watch my favorite show", description: "this is desc" },
    "task-3": { id: "task-3", title: "Charge my phone", description: "asss fcckk" },
    "task-4": { id: "task-4", title: "Cook dinner", description: "" }
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

export default function App() {
  const [state, setstate] = useState(initData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    console.log(result);
    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      };

      setstate(newState);
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
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    setstate(newState);
  };

  const getData = () => {
    return state.columnOrder.map((columnId: any, key: any) => {
      const column = state.columns[columnId];
      const tasks = column.taskIds.map((taskId: any, key: any) => state.tasks[taskId]);
      return (
        <Box p={1} key={key}>
          <Column key={column.id} column={column} task={tasks} />
        </Box>
      );
    });
  };

  const addColumn = () => {
    const newColumn = {
      id: "column-5",
      title: "",
      taskIds: []
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        ["column-5"]: newColumn
      },
      columnOrder: [...state.columnOrder, "column-5"]
    };

    setstate(newState);
    console.log(state);
  };
  return (
    <Container>
      <AppBar />

      <Box mt={15}>
        <DragDropContext onDragEnd={e => onDragEnd(e)}>
          {/* <Box display="flex" justifyContent="flex-start"> */}
          <Box display="flex" alignItems="flex-start">
            {getData()}
            <Box mt={2}>
              <Fab
                variant="extended"
                component={"button"}
                size="medium"
                color="primary"
                aria-label="add"
                onClick={(e: any) => addColumn()}
              >
                <AddIcon />
                add item
              </Fab>
            </Box>
          </Box>
        </DragDropContext>
      </Box>
      {/* <AppDrawer /> */}

      {/* {this.getData} */}
      {/* <DragDropContext onDragEnd={this.onDragEnd}>{this.getData}</DragDropContext> */}
    </Container>
  );
}

interface IAppProps {
  columnOrder: any;
  tasks: any;
  columns: any;
}
