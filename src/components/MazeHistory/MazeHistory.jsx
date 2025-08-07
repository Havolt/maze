import { useContext, useRef, useEffect } from 'react'
import { MazeContext } from '@/store/MazeContext'

import Styles from './MazeHistory.module.css'

function MazeHistory() {
  const { pagesVisited, currentPage } = useContext(MazeContext)

  const combinedPages = [...pagesVisited, currentPage]
  const lastCombinedPage = combinedPages.length - 1

  const lastItemStyle = { backgroundColor: '#f5f5f5', color: 'black' }

  const mazeHistory = useRef()

  if (mazeHistory.current) {
    mazeHistory.current.scrollLeft = mazeHistory.current.scrollWidth
  }

  useEffect(() => {
    // This effect runs after the component renders and whenever 'items' changes.
    if (mazeHistory.current) {
      mazeHistory.current.scrollLeft = mazeHistory.current.scrollWidth
    }
  }, [pagesVisited]) // This is the crucial part: the dependency array.

  return (
    <div className={Styles.mazeHistory} ref={mazeHistory}>
      {combinedPages.map((pageNum, index) => {
        return (
          <span
            style={index === lastCombinedPage ? lastItemStyle : null}
            key={index}
          >
            {pageNum}
          </span>
        )
      })}
    </div>
  )
}

export default MazeHistory
