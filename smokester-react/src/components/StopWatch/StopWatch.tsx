import Paper from "@material-ui/core/Paper";
import { Theme, withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
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
    marginLeft: "auto"
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
      timeLeft: this.getTimeLeft(),
      percentage: 100
    };
  }

  public componentDidMount() {
    const { deadline } = this.props;
    this.setTimeAndInterval();
    if (deadline) {
      this.interval = window.setInterval(() => {
        this.setTimeAndInterval();
      }, 30000);
    }
  }

  public componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  public render() {
    const { classes } = this.props;
    const { percentage } = this.state;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          {/* <Typography variant="headline" component="h3">
            This will soon be a timer.
          </Typography>
          <Typography component="p">
            But I'm a bit tired for today and need a little brake =)
            <br />
            {timeLeft.toString()}
            <br />
            {}
            <br />
            {`${Math.floor(percentage)}%`}
          </Typography> */}
          <CircularProgress progress={percentage} details={this.getDetails()} />
        </Paper>
      </div>
    );
  }

  private getDetails() {
    const { timeLeft } = this.state;

    const formattedTimeLeft = moment()
      .startOf("day")
      .seconds(Math.abs(timeLeft))
      .format("H:mm");
    if (timeLeft < 0) {
      return `${formattedTimeLeft} left`;
    }
    return `+${formattedTimeLeft} passed`;
  }

  private setTimeAndInterval() {
    const { deadline, period } = this.props;

    if (deadline) {
      const timeLeft = this.getTimeLeft();
      const percentage = this.getPercentage(timeLeft, period);
      this.setState({
        timeLeft,
        percentage
      });
    }
  }

  private getTimeLeft() {
    const { deadline } = this.props;
    if (deadline) {
      return parseInt(
        moment()
          .diff(this.props.deadline, "second")
          .toFixed(0)
          .toString(),
        0
      );
    }
    return 0;
  }

  private getPercentage(current: number, total: number) {
    if (current < 0) {
      return (Math.abs(current) / total) * 100;
    }
    return (Math.abs(current) + total / total) * 100;
  }
}

export default withStyles(styles)(StopWatch);
