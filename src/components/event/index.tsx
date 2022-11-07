import React from "react"
import Form from "./Form";
import "./style.css"

interface IProps {
    type: string
}

const Event: React.FC<IProps> = (props) => {
    return (
        <div>
            <h2>Создание {props.type}</h2>
            <Form />
        </div>
    )
};


export default Event;
