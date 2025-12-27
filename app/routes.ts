import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/Layout.tsx", [
    route("/", "pages/Menu.tsx"),
    route("/settings", "pages/Settings.tsx"),
    // route("/community", "pages/Community.tsx")
    layout("routes/Community.tsx", [
      route("/community/people", "pages/People.tsx"),
      route("/community/guild", "pages/Guild.tsx"),
    ])
  ]),
  route("/login", "pages/Login.tsx")
] satisfies RouteConfig;
