import { useState } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'
import MazeControls from './components/MazeControls/MazeControls'

const MAX_PAGE = 45;

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const [showText, setShowText] = useState(true);
  const [pagesVisited, setPagesVisited] = useState([]);

  const currentPageCode = currentPage.toString().padStart(2, '0');

  // ! Memoize later
  const updateCurrentPage = (newPage) => {
    if(newPage < 0 || newPage > MAX_PAGE) {
      console.warn(`Invalid page update: ${newPage}. Must be between 0 and ${MAX_PAGE}.`);
      return;
    }
    setPagesVisited([...pagesVisited, currentPageCode]);
    setCurrentPage(newPage);
    
  }
  // ! Memoize later
  const toggleShowText = () => {
    setShowText(!showText);
  }

  const pagesVisitedAmount = pagesVisited.length; // +1 for the current page

  console.log(currentPageCode);

  return (
    <main className="app">
      <MazePage 
        currentPageCode={currentPageCode} 
        onDoorClick={updateCurrentPage} 
        showText={showText}
      />
      <MazeControls onToggleShowText={toggleShowText} pagesVisitedAmount={pagesVisitedAmount} />
      
    </main>
  )
}

export default App
