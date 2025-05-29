import { useState } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'
import MazeControls from './components/MazeControls/MazeControls'

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const [showText, setShowText] = useState(true);

  const currentPageCode = currentPage.toString().padStart(2, '0');

  const updateCurrentPage = (newPage) => {
    setCurrentPage(newPage);
  }

  const toggleShowText = () => {
    setShowText(!showText);
  }

  console.log(currentPageCode);

  return (
    <main class="app">
      <MazePage 
        currentPageCode={currentPageCode} 
        onDoorClick={updateCurrentPage} 
        showText={showText}
      />
      <MazeControls onToggleShowText={toggleShowText} />
      
    </main>
  )
}

export default App
