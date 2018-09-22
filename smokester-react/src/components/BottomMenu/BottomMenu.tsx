import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { withStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import Settings from "@material-ui/icons/Settings";
import Timelapse from "@material-ui/icons/Timelapse";
import * as React from "react";

const styles = {
  root: {
    bottom: 0,
    position: "absolute" as "absolute",
    width: "100%"
  }
};

export interface Props {
  classes: {
    root: string;
  };
}

interface State {
  value: number;
}

class BottomMenu extends React.Component<Props, State> {
  public state = {
    value: 0
  };

  public handleChange = (_: React.ChangeEvent, value: number) => {
    this.setState({ value });
  };

  public render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels={true}
        className={classes.root}
      >
        <BottomNavigationAction label="Schedule" icon={<Timelapse />} />
        <BottomNavigationAction label="Invite" icon={<Chat />} />
        <BottomNavigationAction label="Settings" icon={<Settings />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomMenu);
