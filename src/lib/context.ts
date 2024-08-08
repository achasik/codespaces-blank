import { createContext } from "react";
import { User } from "../models/User";

export const UserContext = createContext<User>({ id: 0, displayName: "Гость" });