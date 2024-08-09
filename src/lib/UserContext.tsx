import { User } from "../models/User";
import useSWR from "swr";
import { GET } from "../api/fetcher";
import { createContext, ReactNode } from "react";
import Spinner from "../components/Spinner";

const defaultUser = { id: 0, displayName: "Гость" };
export const UserContext = createContext<User>(defaultUser);

const UserContextLoader = ({ children }: { children: ReactNode }) => {
  const { data: user = defaultUser, isLoading } = useSWR<User>(
    "/user/current",
    GET
  );
  if (isLoading) return <Spinner />;
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserContextLoader;
