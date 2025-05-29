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
    <main class="app">
      <MazePage 
        currentPageCode={currentPageCode} 
        onDoorClick={updateCurrentPage} 
        showText={showText}
      />
      <button onClick={() => setShowText(!showText)}>Toggle text</button>
    </main>
  )
}

export default App
