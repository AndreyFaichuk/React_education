import './App.css';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import DisplayComponent from './components/DisplayComponent';
import BtnComponent from './components/ButtonComponent';


function App() {

  const [time, setTime] = useState(0);
  const [watch, setWatch] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {

    const unsubscribe = new Subject();
    interval(1000)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (watch) {
            setTime(val => val + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watch]);

  const handleStart = () => {
    setWatch(prevState => !prevState);
    setStatus(1);
  }

  const handleStop = () => {
    if (time !== 0) {
      setWatch(false);
    }
    setStatus(2);
  }

  const handleReset = () => {
    setTime(0);
    setWatch(false);
    setStatus(0);
  }

  const handleWait = () => {
    handleStop()
  }

  return (
      <div className="App">
            <div className='stopwatch'>
              <DisplayComponent time={time}/>
              <BtnComponent
                  start={handleStart}
                  stop={handleStop}
                  reset={handleReset}
                  status={status}
                  wait={handleWait}
              />
            </div>
          </div>
  );
}

export default App;