import React from "react"
import Form from "./Form";
import "./style.css"

interface IProps {}

const Profile: React.FC<IProps> = (props) => {
    return (
        <div>
            <h2>Профайл</h2>
            <Form />
        </div>
    )
};


export default Profile;
