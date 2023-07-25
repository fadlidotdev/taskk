import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/router";

const RootComponent = () => (
  <>
    <Outlet />
  </>
);

const rootRoute = new RootRoute({
  component: RootComponent,
});

const Index = () => (
  <PrivateRoute>
    <Home />
  </PrivateRoute>
);

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);

// Create the router using your route tree
const router = new Router({routeTree});

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
