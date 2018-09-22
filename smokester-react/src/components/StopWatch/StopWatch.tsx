import Paper from "@material-ui/core/Paper";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

const styles = (theme: Theme) => ({
  outerRing: {
    stroke: theme.palette.primary.main
  },
  root: {
    ...theme.mixins.gutters(),
    height: "100%",
    padding: theme.spacing.unit * 2
  }
});

interface Props {
  classes: {
    root: string;
    stopwatch: string;
    wrapper: string;
    outerRing: string;
  };
}

function StopWatch(props: Props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          This will soon be a timer.
        </Typography>
        <Typography component="p">
          But I'm a bit tired for today and need a little brake =)
        </Typography>
        <div className={classes.wrapper}>
          <svg
            className={classes.stopwatch}
            viewBox="0 0 100 100"
            height="100"
            width="100"
          >
            <circle
              className={classes.outerRing}
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(StopWatch);
