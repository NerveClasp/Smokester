import { Theme, withStyles } from "@material-ui/core/styles";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

const styles = (theme: Theme) => ({
  root: {
    display: "block" as "block",
    marginRight: "auto",
    marginLeft: "auto",
    transform: "rotateZ(-90deg)",
    "&::after": {
      fontSize: "12px",
      display: "block" as "block",
      position: "absolute" as "absolute",
      content: "attr(data-details)",
      transform: "rotateZ(90deg)",
      verticalAlign: "middle" as "middle",
      lineHeight: "100px",
      left: 0,
      top: 0,
      height: "100%",
      width: "100%"
    }
  },
  stopwatch: {},
  details: {
    stroke: theme.palette.primary.main
  },
  outerRing: {
    stroke: theme.palette.primary.main
  },
  outerRingOver: {
    stroke: theme.palette.secondary.main
  }
});

export interface Props {
  classes: {
    root: string;
    wrapper: string;
    stopwatch: string;
    outerRing: string;
    outerRingOver: string;
    details: string;
  };
  progress: number;
  size?: number;
  details?: string;
}

const CircularProgress = ({
  classes,
  progress = 100,
  size = 100,
  details
}: Props) => (
  <div
    className={classes.root}
    style={{ height: size, width: size }}
    data-details={details}
  >
    <svg
      className={classes.stopwatch}
      viewBox="0 0 34 34"
      height={size}
      width={size}
    >
      <circle
        cx="17"
        cy="17"
        r="16"
        strokeWidth="2"
        fill="none"
        stroke="#eee"
      />
      <circle
        className={progress > 100 ? classes.outerRingOver : classes.outerRing}
        cx="17"
        cy="17"
        r="16"
        strokeWidth="2"
        fill="none"
        strokeDasharray="100"
        strokeDashoffset={progress}
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default withStyles(styles)(CircularProgress);
