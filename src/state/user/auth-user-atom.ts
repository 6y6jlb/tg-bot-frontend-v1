import { atom } from "recoil";
import { IUserState } from "./types";

export const userState = atom({
  key: 'auth-user',
  default: {
    loaded: false,
    loading: false
  } as IUserState
},
);