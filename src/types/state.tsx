import { UserData } from "./user";

export interface AppState {
  isLogged: boolean | null;
  id: string | null;
  userData: UserData;
}
