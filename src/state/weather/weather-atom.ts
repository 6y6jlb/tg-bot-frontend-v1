import { atom } from "recoil";
import { IWeatherResponse } from "./types";

const weatherState = atom({
  key: 'weather',
  default: [] as Array<IWeatherResponse>
},
);


export default weatherState;
