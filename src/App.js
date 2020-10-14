import React, {useState, useEffect} from 'react'
import audio1 from './sounds/sound1.wav'
import audio2 from './sounds/sound2.wav'
import './App.css'

const sound1 = new Audio(audio1)
const sound2 = new Audio(audio2)

function App() {
  const [BPM, setBPM] = useState(120)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if(start){
      let count = 0
      const ms = Math.round((60 / BPM) * 1000)

      const interval = setInterval(() => {
        if(count !== 0) sound1.play()
        else sound2.play()
        
        count++

        if(count >= 4) count = 0
      }, ms)

      return () => clearInterval(interval)
    }
  }, [start])

  return (
    <div className='wrapper'>
      <div className='App'>
        <h2>Metronome</h2>
        <span>BPM: {BPM}</span>
        <input min='60' max='240' type='range' value={BPM} onChange={e => setBPM(e.target.value)}/>
        <button className='btn btn-info mr-2 btn-lg mt-2' onClick={_ => setStart(start => !start)}>{start ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  )
}

export default App
