import React from "react";
import { Switch, Route } from "react-router-dom";

import { ApplicationPaths } from "../../../types";
import { Home } from "../../pages/Home";
import { Challenges } from "../../pages/Challenges";
import { Ranking } from "../../pages/Ranking";
import { Progress } from "../../pages/Progress";
import { Profile } from "../../pages/Profile";
import Login from "../../components/login";
import Logon from "../../components/logon";

const NotAllowedComponent = () => (
  <div>
    <h2>Not allowed page.</h2>
  </div>
);

const LOGIN = ApplicationPaths.LOGIN;
const CREATE = ApplicationPaths.CREATE;
const HOME = ApplicationPaths.HOME;
const CHALLENGES = ApplicationPaths.CHALLENGES;
const RANKING = ApplicationPaths.RANKING;
const PROGRESS = ApplicationPaths.PROGRESS;
const PROFILE = ApplicationPaths.PROFILE;

const Routes = () => (
  <Switch>
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
