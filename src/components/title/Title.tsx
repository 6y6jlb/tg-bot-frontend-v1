import PropTypes from 'prop-types';
import React from "react";
import "./style.css"

interface IProps {
    children: PropTypes.ReactNodeLike
}

const Title: React.FC<IProps> = ({ children }) => {
    return (
        <h2 className='title'>{children}</h2>
    )
};


export default Title;
