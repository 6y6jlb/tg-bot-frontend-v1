import React from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const Button: React.FC<IProps> = ({ title, ...props }) => {

    return (
        <button {...props} className={'button' + props.className}> {title}</button >
    )
}

export default Button