import PropTypes from "prop-types";
export const Button = ({ title }) => <button> {title}</button>;

Button.propTypes = {
  title: PropTypes.string,
};
