import { useState, useMemo } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'
import MazeInstructions from './components/MazeInstructions/MazeInstructions'
import MazeControls from './components/MazeControls/MazeControls'

import { MazeProvider } from './store/MazeContext'

const MAX_PAGE = 45

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showText, setShowText] = useState(true)
  const [showInstructions, setShowInstructions] = useState(false)
  const [pagesVisited, setPagesVisited] = useState([])

  const currentPageCode = useMemo(
    () => currentPage.toString().padStart(2, '0'),
    [currentPage]
  )

  // ! Memoize later
  const updateCurrentPage = (newPage) => {
    if (newPage < 0 || newPage > MAX_PAGE) {
      console.warn(
        `Invalid page update: ${newPage}. Must be between 0 and ${MAX_PAGE}.`
      )
      return
    }
    setPagesVisited([...pagesVisited, currentPageCode])
    setCurrentPage(newPage)
  }
  // ! Memoize later with useCallback
  const toggleShowText = () => {
    setShowText(!showText)
  }

  const toggleShowInstructions = () => {
    setShowInstructions(!showInstructions)
  }

  const pagesVisitedAmount = pagesVisited.length // +1 for the current page

  return (
    <MazeProvider>
      <main className="app">
        {showInstructions ? (
          <MazeInstructions />
        ) : (
          <MazePage
            currentPageCode={currentPageCode}
            onDoorClick={updateCurrentPage}
            h
            showText={showText}
          />
        )}
        <MazeControls
          onToggleShowText={toggleShowText}
          onToggleShowInstructions={toggleShowInstructions}
          pagesVisitedAmount={pagesVisitedAmount}
        />
      </main>
    </MazeProvider>
  )
}

export default App
