import { useState } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'
import MazeInstructions from '@/components/MazeInstructions/MazeInstructions'
import MazeControls from '@/components/MazeControls/MazeControls'

import { MazeProvider } from '@/store/MazeProvider'

function App() {
  // These are needed at app level
  const [showInstructions, setShowInstructions] = useState(true)

  const toggleShowInstructions = () => {
    setShowInstructions(!showInstructions)
  }

  return (
    <MazeProvider>
      <main className="app">
        {showInstructions ? (
          <MazeInstructions onToggleShowInstructions={toggleShowInstructions} />
        ) : (
          <MazePage />
        )}
        <MazeControls
          showInstructions={showInstructions}
          onToggleShowInstructions={toggleShowInstructions}
        />
      </main>
    </MazeProvider>
  )
}

export default App
