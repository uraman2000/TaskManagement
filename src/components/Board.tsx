import React, { Component, ReactChildren, ReactNode } from "react";

class Board extends Component<IBoardProps, {}> {
  constructor(props: IBoardProps) {
    super(props);

    this.state = {};
  }

  drop = (e: any) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("card_id");
    e.target.appendChild(document.getElementById(data));
  };

  allowDrop = (e: any) => {
    e.preventDefault();
  };
  render() {
    console.log(this.props.style);
    return (
      <div 
      id={this.props.id} 
      onDrop={this.drop} 
      onDragOver={this.allowDrop} 
      className={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

interface IBoardProps {
  id: string;
  style: any;
  children: ReactNode;
}
export default Board;
