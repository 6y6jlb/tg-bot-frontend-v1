import React from "react"
import Form from "./Form";
import "./style.css"

interface IProps {
    
}

const Weather: React.FC<IProps> = (props) => {
    return (
        <div>
            <h2>Запрос погоды</h2>
            <Form />
        </div>
    )
};


export default Weather;
