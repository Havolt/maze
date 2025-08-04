import { useContext } from 'react'

import Styles from './MazeControls.module.css'
import {
  faCircleInfo,
  faTextSlash,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons'
import MazeControlsButton from '@/components/MazeControlsButton/MazeControlsButton'
import { MazeContext } from '@/store/MazeContext'

function MazeControls({ onToggleShowInstructions }) {
  const { toggleShowText, pagesVisited, showText } = useContext(MazeContext)
  const pagesVisitedAmount = pagesVisited.length // +1 for the current page
  return (
    <aside className={Styles.mazeControls}>
      <div>
        <MazeControlsButton
          icon={showText ? faTextSlash : faQuoteLeft}
          text={showText ? 'Hide Text' : 'Show Text'}
          onClick={toggleShowText}
        />
        <MazeControlsButton
          icon={faCircleInfo}
          text="Show Instructions"
          onClick={onToggleShowInstructions}
        />
      </div>
      <span className={Styles.stepCounter}>Steps: {pagesVisitedAmount}</span>
    </aside>
  )
}

export default MazeControls
