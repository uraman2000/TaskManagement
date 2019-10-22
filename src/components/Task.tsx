import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
`;

export default class Task extends Component<ITaskProps, {}> {
  render() {
    return (
      
      <Paper onClick={this.props.onClick}>
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided: any, snapshot: any) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              {this.props.task.title}
            </Container>
          )}
        </Draggable>
      </Paper>
    );
  }
}

interface ITaskProps {
  key: any;
  task: any;
  index: any;
  onClick: any;
}
