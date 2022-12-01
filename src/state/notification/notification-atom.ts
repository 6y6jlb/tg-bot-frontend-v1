import { atom } from "recoil";
import { INotification } from "./types";

const commonNotificationState = atom({
  key: 'common-notifications',
  default: [] as Array<INotification>
},
);


export default commonNotificationState;
