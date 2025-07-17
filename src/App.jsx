import { useState, useMemo, useContext } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'
import MazeInstructions from './components/MazeInstructions/MazeInstructions'
import MazeControls from './components/MazeControls/MazeControls'

import { MazeProvider } from './store/MazeProvider'
import { MazeContext } from './store/MazeContext'

const MAX_PAGE = 45

function App() {
  const { currentPage } = useContext(MazeContext)
  // const [currentPage, setCurrentPage] = useState(0)
  const [showText, setShowText] = useState(true)
  const [showInstructions, setShowInstructions] = useState(false)
  const [pagesVisited, setPagesVisited] = useState([])

  const currentPageCode = useMemo(
    () => currentPage.toString().padStart(2, '0'),
    [currentPage]
  )
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
          <MazePage currentPageCode={currentPageCode} showText={showText} />
        )}
        <MazeControls
          onToggleShowInstructions={toggleShowInstructions}
          pagesVisitedAmount={pagesVisitedAmount}
        />
      </main>
    </MazeProvider>
  )
}

export default App
