import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import HowToPlay from "../pages/HowToPlay";
import Dare from "../pages/Dare";
import LeaderBoard from "../pages/LeaderBoard";
import Developer from "../pages/Developer";
import Achievements from "../pages/Achievements";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/how-to-play",
    element: <HowToPlay />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dare",
    element: <Dare />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/leader-board",
    element: <LeaderBoard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/developer",
    element: <Developer />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

export default function AppRouterProvider() {
  return <RouterProvider router={routes}></RouterProvider>;
}
