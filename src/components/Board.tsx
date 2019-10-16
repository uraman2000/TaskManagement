import React from "react";
import { createDecipher } from "crypto";

function Board(props: IBoardsProps) {
  const drop = (e: any) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card!.style.display = "block";
    e.target.appendChild(card);
  };
  const dragOver = (e: any) => {
    e.preventDefault();
  };
  return (
    <div id={props.id} className={props.className} onDrag={drop} onDragOver={dragOver}>
      {props.children}
    </div>
  );
}

interface IBoardsProps {
  id: string;
  className: string;
  children: any;
}
export default Board;
