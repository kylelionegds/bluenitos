import { Start } from "app/pages/Start";
import React from "react";
import { Route, Switch } from "react-router-dom";

import { ApplicationPaths } from "../../../types";
import { Challenges } from "../../pages/Challenges";
import { Home } from "../../pages/Home";
import { Profile } from "../../pages/Profile";
import { Progress } from "../../pages/Progress";
import { Ranking } from "../../pages/Ranking";
import Login from "../authentication/Login";
import Logon from "../authentication/Logon";

// const NotAllowedComponent = () => (
//   <div>
//     <h2>Not allowed page.</h2>
//   </div>
// );

const START = ApplicationPaths.START;
const LOGIN = ApplicationPaths.LOGIN;
const CREATE = ApplicationPaths.CREATE;
const HOME = ApplicationPaths.HOME;
const CHALLENGES = ApplicationPaths.CHALLENGES;
const RANKING = ApplicationPaths.RANKING;
const PROGRESS = ApplicationPaths.PROGRESS;
const PROFILE = ApplicationPaths.PROFILE;

const Routes = () => (
  <Switch>
    <Route exact path={START} component={Start} />
    <Route exact path={LOGIN} component={Login} />
    <Route exact path={CREATE} component={Logon} />
    <Route exact path={HOME} component={Home} />
    <Route exact path={CHALLENGES} component={Challenges} />
    <Route exact path={RANKING} component={Ranking} />
    <Route exact path={PROGRESS} component={Progress} />
    <Route exact path={PROFILE} component={Profile} />
  </Switch>
);

export default Routes;
