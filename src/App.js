import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./Pages/Home";
const useStyles = makeStyles((theme) => ({
  app: {
    [theme.breakpoints.down("md")]: {
      width: "156vw",
    },
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Switch>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
