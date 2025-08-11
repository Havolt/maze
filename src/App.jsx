import { useState } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'
import MazeInstructions from '@/components/MazeInstructions/MazeInstructions'
import MazeControls from '@/components/MazeControls/MazeControls'

import { MazeProvider } from '@/store/MazeProvider'
import MazeCopyright from './components/MazeCopyright/MazeCopyright'

function App() {
  // These are needed at app level
  const [showInstructions, setShowInstructions] = useState(true)
  const [showCopyright, setShowCopyright] = useState(false)

  const toggleShowInstructions = () => {
    setShowInstructions(!showInstructions)
  }

  const toggleShowCopyright = () => {
    setShowCopyright(!showCopyright)
  }

  const showingAuxiliary = showInstructions || showCopyright

  return (
    <MazeProvider>
      <main className="app">
        {showInstructions && (
          <MazeInstructions onToggleShowInstructions={toggleShowInstructions} />
        )}
        {showCopyright && <MazeCopyright />}
        {!showingAuxiliary && <MazePage />}
        <MazeControls
          showInstructions={showInstructions}
          onToggleShowInstructions={toggleShowInstructions}
          showCopyright={showCopyright}
          onToggleShowCopyright={toggleShowCopyright}
        />
      </main>
    </MazeProvider>
  )
}

export default App
