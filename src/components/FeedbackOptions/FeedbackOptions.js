import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.buttonsList}>
      {options.map((option) => (
        <li key={option} className={s.item}>
          <button
            className={s.button}
            type="button"
            onClick={() => onLeaveFeedback({ type: option })}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
