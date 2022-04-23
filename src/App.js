import React, { useState, useEffect } from 'react';
import * as ACTIONS from './lib/actions';
import store from './lib/store';

const styles = {
  h1 : {
    margin: 0,
    textDecoration: 'underline',
    fontWeight: '400'
  },
  buttons : {
    width: '20%',
    fontSize: 20,
    display: 'inline-flex',
    justifyContent: 'space-around'
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.3
  }
}


const App = () => {
  // const state = useSelector(state=>state) 
  // console.log(state)
  const [value, setValue] = useState(0)
  const[input, setInput] = useState(0)
  const increment = () => {
    setValue(prevCount => (prevCount + 1))
    store.dispatch(ACTIONS.increment())
  }
  const decrement = () => {
    setValue(prevCount => (prevCount - 1))
    store.dispatch(ACTIONS.decrement())
  }
  const incrementBy = () => {
    setValue(prevCount => (prevCount + parseInt(input)))
    store.dispatch(ACTIONS.incrementBy(parseInt(input)))

  }
  const decrementBy = () => {
    setValue(prevCount => (prevCount - parseInt(input)))
    store.dispatch(ACTIONS.decrementBy(parseInt(input)))

  }
  useEffect(() =>console.log(store.getState()), [value])
  return (
    <div className='App'>
      <div className='App-header'>
        <h1 style={styles.h1}>Counter</h1>
        <h2>{value}</h2>

        <div>
          <div style={styles.buttons}>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
          </div><br />
          <div style={styles.buttons }>
            <button onClick={ decrementBy } >Substract</button>&nbsp;
            <input onChange={e => setInput(e.target.value)} value={input} />
            <button onClick={ incrementBy } >Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
