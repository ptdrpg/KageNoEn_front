import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/Layout.tsx", [
    route("/", "pages/Menu.tsx")
  ])
] satisfies RouteConfig;
