import { useState } from 'react'
import './App.css'

import MazePage from './components/MazePage/MazePage'

function App() {

  const [currentPage, setCurrentPage] = useState(0);

  const currentPageCode = currentPage.toString().padStart(2, '0');

  console.log(currentPageCode);

  return (
    <>
      <MazePage currentPageCode={currentPageCode} />
    </>
  )
}

export default App
