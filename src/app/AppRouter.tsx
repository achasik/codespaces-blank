import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import { MainErrorBoundary } from "./MainErrorBoundary";

const AppRouter = () => {
  //const router = useMemo(() => createRouter(queryClient), [queryClient]);
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        errorElement: <MainErrorBoundary />,
        children: [{ path: "/", element: <Home /> }],
      },
    ],
    { basename: "/new" }
  );

  return <RouterProvider router={router} />;
};
export default AppRouter;
