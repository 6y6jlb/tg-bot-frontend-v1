import React from "react"
import Button from "../button/Button";

interface IProps { }

const Form: React.FC<IProps> = (props) => {
    return (
        <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
        <Button title="отправить"/>
    </form >
  )
};


export default Form;
