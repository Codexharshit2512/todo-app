import DashBoard from "../pages/DashBoard";
import SignIn from "../pages/SignIn";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={DashBoard} />
        <PublicRoute path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
