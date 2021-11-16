import PropTypes from "prop-types";
import Notification from "../Notificaton";
import s from "./Statistic.module.css";

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return total ? (
    <ul className={s.list}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  ) : (
    <Notification message={"No feedback given"} />
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
