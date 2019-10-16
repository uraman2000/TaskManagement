import React from "react";

function Card(props: ICardProps) {
  const dragStart = (e: any) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.dragable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    ></div>
  );
}

interface ICardProps {
  id: string;
  className: string;
  children: any;
  dragable: boolean;
}

export default Card;
