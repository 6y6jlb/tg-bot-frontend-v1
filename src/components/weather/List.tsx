import React from "react";
import "./style.css"
import Title from "../title/Title";

interface IProps {
    children?: React.ReactNode,
    title?: string,
    hide?: boolean
}

const List: React.FC<IProps> = ({ children, title, hide }) => {
    if(hide) {
        return <Title className='text-mutted'>Нету актуальных данных</Title>
    }
    return (
        <div className="list-wrapper">
            {title && <Title>{title}</Title>}
            {children}
        </div>
    )
};


export default List;
