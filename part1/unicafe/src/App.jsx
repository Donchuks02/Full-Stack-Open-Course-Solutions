import { use, useState } from "react"

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}


const Statistics = (props) =>{
  if (props.total === 0 ) {
    return (
      <p>No feedback given</p>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positivePercentage + '%'} />
      </tbody>
    </table>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  // Calculate total feedback
  const total = good + neutral + bad;

  // calculate average feedback
  const average = (good - bad) / total;

  // Calculate percentage of positive feedback
  const positivePercentage = ((good * 100) / total) 

  return (
    <div>
      
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />


      <h1>statistics</h1>
      <Statistics      
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage}
      />

    </div>

  )

}


export default App