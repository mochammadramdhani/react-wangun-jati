import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, type = "button", className = "", ...rest }) => {
  return (
    <button
      type={type}
      className={`py-3 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg shadow-md transition duration-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
