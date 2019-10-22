import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskModal from "./TaskModal";
import { Button } from "@material-ui/core";

const Container = styled.div`
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

export default class Column extends Component<IColumnProps, IColumnState> {
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
    return (
      <div>
        <Container>
          <Title>{this.props.column.title}</Title>
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
        </Container>
  
        <TaskModal open={this.state.open} taskCloseHandler={this.taskCloseHandler} />
      </div>
    );
  }
}

interface IColumnProps {
  key: string;
  column: any;
  task: any;
}

interface IColumnState {
  open: boolean;
}
