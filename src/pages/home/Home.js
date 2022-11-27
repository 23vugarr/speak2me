import SearchIcon from '../../assets/images/search-bar.svg'
import MicIcon from '../../assets/images/microphone.svg'
import ToggleSwitch from '../../components/toggle/Toggle'
import { useState } from 'react'
import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Home = () => {

  const [checked, setChecked] = useState(false);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  return (
    <div className="home" id="home">
      <div className="home-container">
        <form>
          <div className='search-container'>
            <input type='text' placeholder="Search..." />
            <button type='submit'>
              <img src={SearchIcon} alt='search' />
            </button>
          </div>
        </form>
        <div className='speech-container'>
          {transcript && !checked ? (
            <p>{transcript}</p>
          ) : (
            <p>Your speech will be converted to text...</p>
          )}
        </div>
        <div className='mic-container'>
          <button type='button' style={{border: "none", backgroundColor: "rgba(201, 31, 31, 0.9)"}} onClick={checked ? SpeechRecognition.stopListening : SpeechRecognition.startListening({continuous: true})}>
          <ToggleSwitch setChecked={setChecked} label='Speak'  />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home