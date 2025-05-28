import { useState } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const [showText, setShowText] = useState(true);

  const currentPageCode = currentPage.toString().padStart(2, '0');

  const updateCurrentPage = (newPage) => {
    setCurrentPage(newPage);
  }

  console.log(currentPageCode);

  return (
    <>
      <button onClick={() => setShowText(!showText)}>Toggle text</button>
      <MazePage 
        currentPageCode={currentPageCode} 
        onDoorClick={updateCurrentPage} 
        showText={showText}
      />
    </>
  )
}

export default App
