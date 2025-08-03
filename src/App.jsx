import { useState, useMemo, useContext } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'
import MazeInstructions from './components/MazeInstructions/MazeInstructions'
import MazeControls from './components/MazeControls/MazeControls'

import { MazeProvider } from './store/MazeProvider'

function App() {
  const [showInstructions, setShowInstructions] = useState(false)

  const toggleShowInstructions = () => {
    setShowInstructions(!showInstructions)
  }

  return (
    <MazeProvider>
      <main className="app">
        {showInstructions ? <MazeInstructions /> : <MazePage />}
        <MazeControls onToggleShowInstructions={toggleShowInstructions} />
      </main>
    </MazeProvider>
  )
}

export default App
