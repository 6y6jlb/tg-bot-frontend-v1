import React from "react";
import "./style.css";
import PropTypes from 'prop-types'

interface IProps {
    children: PropTypes.ReactNodeLike
}

const CustomerLayout: React.FC<IProps> = (props) => {
  return (
    <div className="customer-wrapper">
      {props.children}
    </div>
  )
};


export default CustomerLayout;
