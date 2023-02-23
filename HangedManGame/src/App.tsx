import './App.css'
import Keyboard from './components/Keyboard'
import MainScreen from './components/MainScreen'
import TopBar from './components/TopBar'

function App() {
  //TODO:  Create a basic layout ( word, hangedman image, keyboard, scoreboard, info, HowToPlay)

  return (
    <div className="App">
      <TopBar/>
      <MainScreen/>
      <Keyboard />
    </div>
  )
}

export default App
