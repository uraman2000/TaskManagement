import React, { Component, ReactChildren, ReactNode } from "react";

export default class Card extends Component<ICardProps, {}> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {};
  }

  drag = (e: any) => {
    e.dataTransfer.setData("card_id", e.target.id);
  };

  noAllowDrop = (e: any) => {
    e.stopPropagation();
  };
  render() {
    return (
      <div
        id={this.props.id}
        draggable={true}
        onDragStart={this.drag}
        onDragOver={this.noAllowDrop}
        className={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

interface ICardProps {
  id: string;
  style: any;
  children: ReactNode;
}
