import { useContext } from 'react'
import { MazeContext } from '@/store/MazeContext'

import Styles from './MazeHistory.module.css'

function MazeHistory() {
  const { pagesVisited } = useContext(MazeContext)

  console.log(pagesVisited)

  return (
    <div className={Styles.mazeHistory}>
      {pagesVisited.map((pageNum) => {
        return <span>{pageNum}</span>
      })}
    </div>
  )
}

export default MazeHistory
