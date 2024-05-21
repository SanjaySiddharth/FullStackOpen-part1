import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter+1)
  const reset =()=> setCounter(0)
  const decreaseByOne = () => setCounter(counter-1)
  return (
    <>
    <Display counter={counter}></Display>
    <Button onClick={increaseByOne} text='plus'></Button>
    <Button onClick={reset} text='reset'></Button>
    <Button onClick={decreaseByOne} text='minus'></Button>
    </>
  )
}


export default App

const Display = (props) => {
  return (
    <div> {props.counter}
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
        {props.text}
    </button>
  )
}