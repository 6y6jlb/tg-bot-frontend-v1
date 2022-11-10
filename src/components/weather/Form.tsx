import React from "react"
import Button from "../button/Button";
import "./style.css"


// const initialState = {
//     city: '',
//     timezone: '',

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

    // const [state, dispatch] = React.useReducer(reducer)
    const options = ['Russian', 'English']

    return (
        <form className="form">
            <input className="input" type="text" />
            <input className="input" type="text" />
            <select className="select">
                {options.map((el, index) => <option value={index}>{el}</option>)}
            </select>
            <select className="select">
                {options.map((el, index) => <option value={index}>{el}</option>)}
            </select>
            <Button title="отправить" />
        </form >
    )
};


export default Form;
