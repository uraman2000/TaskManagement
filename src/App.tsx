import React, { Component } from "react";
import { makeStyles, withStyles, createStyles } from "@material-ui/styles";
import Board from "./components/Board";
import Card from "./components/Card";

const useStyles = createStyles({
  wrapper: {
    width: "100%",
    padding: "32px",
    display: "flex",
    justifyContent: "center"
  },
  item: {
    paddig: 8,
    color: "#555",
    backgroundColor: "white",
    boarderRadius: 3
  },
  board: {
    backgroundColor: "#555",
    width: 250,
    height: 400,
    margin: 32
  },
  card: {
    margin: 8
  }
});

class App extends Component<IAppProps, any> {
  render() {
    const classes = this.props.classes;

    console.log(classes);
    return (
      <div>
        {/* <AppDrawer /> */}
        {/* <AppBar /> */}
        <div className={classes.wrapper}>
          <Board id="board-1" className={classes.board}>
            <Card id="item-1" className={classes.card}>
              <div className={classes.item}>text</div>
            </Card>
          </Board>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
interface IAppProps {
  classes: any;
}
