import React from "react"
import Button from "../button/Button";
import "./style.css";
import tz from '../../const/tz.json'
import { spawn } from "child_process";


// const initialState = {
//     name: '',
//     timezone: '',
//     language: '',
//     name: '',
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

interface IProps { }

const Form: React.FC<IProps> = (props) => {

    const options = ['Russian', 'English']
    const timezones = tz.map((el) => {
        return el.utc.map(zone => {
            const utc = el.text.split(' ')[0];
            return (
                <option className="option" value={zone}>
                    {utc}&nbsp;{zone}
                </option>
            )
        })



    })

    return (
        <form className="form">
            <input className="input" type="text" />
            <input className="input" type="text" />
            <select className="select">
                {options.map((el, index) => <option value={index}>{el}</option>)}
            </select>
            <select className="select">
                {timezones}
            </select>
            <Button title="отправить" />
        </form >
    )
};


export default Form;
