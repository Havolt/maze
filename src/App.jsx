import { useState } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'

function App() {

  const [currentPage, setCurrentPage] = useState(6);

  const currentPageCode = currentPage.toString().padStart(2, '0');

  const updateCurrentPage = (newPage) => {
    // setCurrentPage(newPage);
  }

  console.log(currentPageCode);

  return (
    <>
      <MazePage currentPageCode={currentPageCode} onDoorClick={updateCurrentPage} />
    </>
  )
}

export default App
