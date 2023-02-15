import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "layout/ProtectedRoute/ProtectedRoute";
import UnProtectedRoute from "layout/UnProtectedRoute/UnProtectedRoute";

// PAGES
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Login from "./Login/LoginPage";
import Register from "./Register/RegisterPage";
import TodoList from "./Todos/TodosPage";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <TodoList />,
          },
        ],
      },
      {
        path: "/",
        element: <UnProtectedRoute />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
