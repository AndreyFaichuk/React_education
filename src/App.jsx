import React, {useState, useEffect} from 'react'
import './App.css';
import DisplayComponent from './components/DisplayComponent'
import BtnComponent from './components/BtnComponent'

let timer = []

let getLocalStorage = JSON.parse(localStorage.getItem('timer'))

function setLocalStorage(){
    localStorage.setItem('timer', JSON.stringify(timer))
}

if(getLocalStorage){
    timer = getLocalStorage
}

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [interval, setInterv] = useState()
  const [status, setStatus] = useState(0)
  const [statusTime, setStatusTime] = useState(0)

    let updatedMs = time.ms,
      updatedS = time.s,
      updatedM = time.m,
      updatedH = time.h

  const start = () => {
      setInterv(setInterval(run, 10))
  }

  const stop = () => {
      clearInterval(interval)
      timer.push(time)
      setInterv()
      setLocalStorage()
      if(interval !== undefined){
          setStatus(1)
          setStatusTime(1)
      }
  }

  const resume = () => start()

  const reset = () => {
        clearInterval(interval)
        setInterv(setInterval)
        setTime({ms:0, s:0, m:0, h:0})
        setStatus(0)
        setStatusTime(1)
        timer.push(time)
        setLocalStorage()
  }

  const run = () => {
        if(updatedM === 60){
            updatedH++
            updatedM = 0}
        if(updatedS === 60){
            updatedM++
            updatedS = 0}
        if(updatedMs === 100){
            updatedS++
            updatedMs = 0}
        updatedMs++
      return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }

  const clearHistory = () => {
      localStorage.removeItem('timer')
      setTime({ms:0, s:0, m:0, h:0})
      clearInterval(interval)
      setStatus(0)
  }


  return (
    <div className="main-section">
        <div className="clock-holder">
            <div className="stopwatch">
                <DisplayComponent time = {time}/>
                <BtnComponent status = {status} start = {start} stop = {stop}
                              resume = {resume} reset = {reset} time = {time}
                              timer = {timer} statusTime = {statusTime}
                              clearHistory = {clearHistory}
                />
            </div>

        </div>
    </div>
  );
}

export default App;
