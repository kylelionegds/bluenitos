export type Paths = "home" | "challenges" | "ranking" | "progress" | "profile";

export type languages =
  | "javascript"
  | "java"
  | "python"
  | "dart"
  | "elixir"
  | "sql"
  | "csharp"
  | "cpp"
  | "typescript"
  | "ruby";

export const ApplicationPaths = {
  START: "/",
  LOGIN: "/login",
  CREATE: "/create",
  HOME: "/home",
  CHALLENGES: "/challenges",
  RANKING: "/ranking",
  PROGRESS: "/progress",
  PROFILE: "/profile",
  CHALLENGE: "/challenge/[id]",
};
