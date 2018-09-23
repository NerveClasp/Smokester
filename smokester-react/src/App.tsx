// import primary from "@material-ui/core/colors/blueGrey";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import moment from "moment";
import * as React from "react";
import "./App.css";
import { BottomMenu, Header, StopWatch } from "./components";

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      dark: "#1b3039",
      light: "#708690",
      main: "#445963"
    },
    secondary: {
      contrastText: "#000",
      dark: "#c67100",
      light: "#ffd149",
      main: "#ffa000"
    }
  }
});

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <div>
            <StopWatch
              deadline={moment("23.09.2018 22:30", "DD.MM.YYYY HH:mm")}
              period={60 * 60}
            />
          </div>
          <BottomMenu />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
