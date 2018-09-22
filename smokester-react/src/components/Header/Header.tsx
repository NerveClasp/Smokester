import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

export interface Props {
  classes: {
    root: string;
    menuButton: string;
    grow: string;
  };
  pageName?: string;
}

const Header = ({ classes, pageName = "Smokester" }: Props) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.grow}>
          {pageName}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
})(Header);
