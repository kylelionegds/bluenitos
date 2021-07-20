import { ApplicationPaths } from "../../../types";
import { Challenges } from "../../pages/Challenges";
import { Home } from "../../pages/Home";
import { Profile } from "../../pages/Profile";
import { Progress } from "../../pages/Progress";
import { Ranking } from "../../pages/Ranking";

const HOME = ApplicationPaths.HOME;
const CHALLENGES = ApplicationPaths.CHALLENGES;
const RANKING = ApplicationPaths.RANKING;
const PROGRESS = ApplicationPaths.PROGRESS;
const PROFILE = ApplicationPaths.PROFILE;

const AppPath = {
  HOME,
  CHALLENGES,
  RANKING,
  PROGRESS,
  PROFILE,
};

const AppRoutes = [
  {
    path: HOME,
    name: "home",
    component: Home,
    exact: true,
  },
  {
    path: CHALLENGES,
    name: "challenges",
    component: Challenges,
    exact: true,
  },
  {
    path: RANKING,
    name: "ranking",
    component: Ranking,
    exact: true,
  },
  {
    path: PROGRESS,
    name: "progress",
    component: Progress,
    exact: true,
  },
  {
    path: PROFILE,
    name: "profile",
    component: Profile,
    exact: true,
  },
];

export { AppPath, AppRoutes };
