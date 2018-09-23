import Paper from "@material-ui/core/Paper";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import * as React from "react";
import { CircularProgress } from "../index";

const styles = (theme: Theme) => ({
  outerRing: {
    stroke: theme.palette.primary.main
  },
  root: {
    ...theme.mixins.gutters(),
    height: "100%",
    padding: theme.spacing.unit * 2
  },
  wrapper: {
    height: 100,
    width: 100,
    marginRight: "auto",
    marginLeft: "auto",
    transform: "rotateZ(-90deg)"
  }
});

interface Props {
  deadline?: moment.Moment | string;
  period: number;
  classes: {
    root: string;
    stopwatch: string;
    wrapper: string;
    outerRing: string;
  };
}

interface State {
  timeLeft: number;
  percentage: number;
}

class StopWatch extends React.Component<Props, State> {
  public interval: number;
  constructor(props: Props) {
    super(props);
    this.state = {
      timeLeft: 0,
      percentage: 100
    };
  }

  public componentDidMount() {
    const { deadline, period } = this.props;
    if (deadline) {
      this.interval = window.setInterval(() => {
        const timeLeft = parseInt(
          moment()
            .diff(deadline, "second")
            .toFixed(0)
            .toString(),
          0
        );
        const percentage = (Math.abs(timeLeft) / period) * 100;
        this.setState({
          timeLeft,
          percentage
        });
      }, 1000);
    }
  }

  public componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  public render() {
    const { classes } = this.props;
    const { timeLeft, percentage } = this.state;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            This will soon be a timer.
          </Typography>
          <Typography component="p">
            But I'm a bit tired for today and need a little brake =)
            <br />
            {timeLeft.toString()}
            <br />
            {`${Math.floor(timeLeft / 60)}:${Math.abs(timeLeft % 60)}`}
            <br />
            {`${Math.floor(percentage)}%`}
          </Typography>
          <CircularProgress progress={percentage} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StopWatch);
