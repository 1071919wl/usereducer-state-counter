import React, {useReducer} from 'react';
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import ComponentA from './abcComponents/ComponentA'
import ComponentB from './abcComponents/ComponentB'
import ComponentC from './abcComponents/ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider
      value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        Count - {count}
        <CounterOne />
        <CounterTwo />
        <CounterThree />
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
