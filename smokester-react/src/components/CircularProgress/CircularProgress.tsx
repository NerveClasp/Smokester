// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import { Theme, withStyles } from "@material-ui/core/styles";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

const styles = (theme: Theme) => ({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    transform: "rotateZ(-90deg)"
  },
  outerRing: {
    stroke: theme.palette.primary.main
  }
});

export interface Props {
  classes: {
    root: string;
    stopwatch: string;
    outerRing: string;
  };
  progress?: number;
  size?: number;
}

const CircularProgress = ({ classes, progress = 100, size = 100 }: Props) => (
  <div className={classes.root} style={{ height: size, width: size }}>
    <svg
      className={classes.stopwatch}
      viewBox="15 15 34 34"
      height={size}
      width={size}
    >
      <circle
        className={classes.outerRing}
        cx="32"
        cy="32"
        r="16"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeDasharray="100"
        strokeDashoffset={progress}
      />
    </svg>
  </div>
);

export default withStyles(styles)(CircularProgress);
