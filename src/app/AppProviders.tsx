import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorBoundary } from "./MainErrorBoundary.tsx";
import useSWR from "swr";
import { User } from "../models/User.ts";
import { GET } from "../api/fetcher.ts";
import { UserContext } from "../lib/context.ts";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.ts";

type AppProviderProps = {
  children: React.ReactNode;
};
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#f9bd27",
//     },
//   },
// });

export const AppProviders = ({ children }: AppProviderProps) => {
  const { data: user } = useSWR<User>("/user", GET, { suspense: true });
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={MainErrorBoundary}>
        <ThemeProvider theme={theme}>
          <UserContext.Provider value={user!}>
            {children}
          </UserContext.Provider>
        </ThemeProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
