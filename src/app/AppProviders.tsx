import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorPage } from "../pages/MainErrorPage.tsx";
import UserContextLoader from "../lib/UserContext.tsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.ts";
//import Spinner from "../components/Spinner.tsx";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //const { data: user } = useSWR<User>("/user", GET, { suspense: true });
  return (
    // <React.Suspense fallback={<Spinner />}>
    <ErrorBoundary FallbackComponent={MainErrorPage}>
      <ThemeProvider theme={theme}>
        <UserContextLoader children={children} />
      </ThemeProvider>
    </ErrorBoundary>
    // </React.Suspense>
  );
};
