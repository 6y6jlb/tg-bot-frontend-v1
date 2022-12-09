import { atom } from "recoil";
import { IOpenWeatherResponse } from "./types";

const weatherState = atom({
  key: 'weather',
  default: [] as Array<IOpenWeatherResponse>
},
);


export default weatherState;
