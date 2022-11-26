import { atom } from "recoil";
import { IUserState } from "./types";

const userState = atom({
  key: 'auth-user',
  default: {
    loaded: false,
    loading: false
  } as IUserState
},
);

export default userState;
