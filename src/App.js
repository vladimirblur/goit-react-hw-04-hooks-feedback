import { useReducer } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistic from "./components/Statistic";
import "./App.css";

const initialFeedbacks = {
  Good: 0,
  Neutral: 0,
  Bad: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "Good":
      return { ...state, Good: state.Good + 1 };

    case "Neutral":
      return { ...state, Neutral: state.Neutral + 1 };

    case "Bad":
      return { ...state, Bad: state.Bad + 1 };

    default:
      throw new Error(`Unsupported action: {${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialFeedbacks);

  const { Good, Neutral, Bad } = state;

  function countTotalFeedback() {
    return Object.values(state).reduce((total, feedback) => total + feedback);
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((Good * 100) / countTotalFeedback()) || 0;
  }

  return (
    <div className="container">
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={dispatch}
        />
      </Section>

      <Section title={"Statistic"}>
        <Statistic
          good={Good}
          neutral={Neutral}
          bad={Bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

export default App;
