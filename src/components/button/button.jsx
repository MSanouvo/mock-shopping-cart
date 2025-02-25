import PropTypes from "prop-types";
import styles from "./button.module.css"

function Button(props) {
  return <button onClick={props.handleClick}>{props.name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
