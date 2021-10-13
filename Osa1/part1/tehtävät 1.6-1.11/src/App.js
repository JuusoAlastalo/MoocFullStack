import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {props.text} {props.value}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
const Statistics = (props) => {
  const average = props.sum / props.counter;
  const positive = (props.good / props.counter) * 100;

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistic</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistic</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.counter} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setCounter(counter + 1);
    setSum(sum + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setCounter(counter + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setCounter(counter + 1);
    setSum(sum - 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        counter={counter}
        sum={sum}
      />
    </div>
  );
};

export default App;
