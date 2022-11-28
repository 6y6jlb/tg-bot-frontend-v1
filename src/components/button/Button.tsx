import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: PropTypes.ReactNodeLike;
}

const Button: React.FC<IProps> = ({ children, ...props }) => {

    return (
        <button {...props} className="button"> {children}</button >
    )
}

export default Button