import React, { useState } from 'react'
import './index.css';

/*const Statistics = props => {
  const average = props.sum / props.counter;
  const positive = (props.good / props.counter) * 100;
  <div>
    <h1>Statistic</h1>
  </div>
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistic</h1>
      <p>No feedback given</p>
      </div>
    )
  }
  return (
    <di>
      <h1>Statistic</h1>
      
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.counter}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </di>
  )
}*/

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {

  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}
const Statistics = (props) => {
  /// ...
  const average = props.sum / props.counter;
  const positive = (props.good / props.counter) * 100;

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistic</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>Statistic</h1>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.counter} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value ={positive} />
    </div>
  )
}




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)
  const [sum, setSum] = useState(0)

  const [allClick, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setCounter(counter + 1)
    setSum(sum + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setCounter(counter + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setCounter(counter + 1)
    setSum(sum - 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

    
    
      <Statistics good={good} neutral={neutral} bad={bad} counter={counter}
                          sum={sum} />
    </div>
  )
}



export default App
