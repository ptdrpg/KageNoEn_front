import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/Layout.tsx", [
    route("/", "pages/Menu.tsx"),
    route("/settings", "pages/Settings.tsx"),
    route("/community", "pages/Community.tsx")
  ]),
  route("/login", "pages/Login.tsx")
] satisfies RouteConfig;
