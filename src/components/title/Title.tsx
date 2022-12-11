import PropTypes from 'prop-types';
import React from "react";
import "./style.css"

interface IProps {
    children: PropTypes.ReactNodeLike,
    className?: string
}

const Title: React.FC<IProps> = ({ children, className }) => {
    return (
        <h2 className={className + ' title'}>{children}</h2>
    )
};


export default Title;
