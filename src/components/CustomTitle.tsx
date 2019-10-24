import React from "react";
import { makeStyles, InputBase } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  title: {
    fontSize: 15,
    "&:hover,& input:focus": {
      backgroundColor: grey[200],
      cursor: "text"
    },
    "& input:focus": {
      borderStyle: "solid",
      border: "black"
    }
  },
  input: {
    cursor: "pointer",
    padding: "8px"
  },
  upercase: {
    textTransform: "uppercase"
  }
});

export default function CustomTitle(props: ICustomTittleProps) {
  const classes = useStyles();

  const isUpperCase = props.isUpperCase ? classes.upercase : "";
  const inputClasses = `${classes.input} ${isUpperCase}`;
  return (
    <InputBase
      inputProps={{
        className: inputClasses
      }}
      className={classes.title}
      defaultValue={props.title}
    />
  );
}

interface ICustomTittleProps {
  title: string;
  isUpperCase: boolean;
}
