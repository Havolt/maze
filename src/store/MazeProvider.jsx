import { useState, useMemo, useEffect } from 'react'
import { MazeContext } from '@/store/MazeContext'

const MAX_PAGE = 45

export const MazeProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('00')
  const [showText, setShowText] = useState(true)
  const [reducedImage, setReducedImage] = useState(false)
  const [pagesVisited, setPagesVisited] = useState([])
  const [mazeStarted, setMazeStarted] = useState(false)

  const currentPageCode = useMemo(
    () => currentPage.toString().padStart(2, '0'),
    [currentPage]
  )

  useEffect(() => {
    // Set reducedImage based on window width
    if (window && window.innerWidth >= 1200) {
      setReducedImage(true)
    }
  }, [])

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

  const toggleReducedImage = () => {
    console.log('here')
    setReducedImage(!reducedImage)
  }

  const restartMaze = () => {
    setCurrentPage('00')
    setPagesVisited([])
    window.scrollTo(0, 0)
  }

  const mazeCtx = {
    currentPage,
    currentPageCode,
    showText,
    reducedImage,
    pagesVisited,
    updateCurrentPage,
    toggleShowText,
    toggleReducedImage,
    mazeStarted,
    setMazeStarted,
    restartMaze,
  }

  return <MazeContext.Provider value={mazeCtx}>{children}</MazeContext.Provider>
}
