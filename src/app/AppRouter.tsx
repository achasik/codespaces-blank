import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import { MainErrorPage } from "../pages/MainErrorPage";

const AppRouter = () => {
  //const router = useMemo(() => createRouter(queryClient), [queryClient]);
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        errorElement: <MainErrorPage />,
        children: [
          { path: "/", element: <Home /> },
          { path: "*", element: <MainErrorPage /> },
        ],
      },
    ],
    { basename: "/new" }
  );

  return <RouterProvider router={router} />;
};
export default AppRouter;
