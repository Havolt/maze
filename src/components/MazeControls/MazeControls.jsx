import { useContext } from 'react'

import Styles from './MazeControls.module.css'
import {
  faCircleInfo,
  faTextSlash,
  faQuoteLeft,
  faWindowRestore,
  faArrowsToCircle,
  faArrowsLeftRightToLine,
} from '@fortawesome/free-solid-svg-icons'
import MazeControlsButton from '@/components/MazeControlsButton/MazeControlsButton'
import { MazeContext } from '@/store/MazeContext'

function MazeControls({ onToggleShowInstructions, showInstructions }) {
  const {
    toggleShowText,
    pagesVisited,
    showText,
    reducedImage,
    toggleReducedImage,
  } = useContext(MazeContext)
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
          icon={showInstructions ? faWindowRestore : faCircleInfo}
          text={showInstructions ? 'Hide Instructions' : 'Show Instructions'}
          onClick={onToggleShowInstructions}
        />
        <MazeControlsButton
          icon={reducedImage ? faArrowsToCircle : faArrowsLeftRightToLine}
          text={reducedImage ? 'Reduce Image Size' : 'Increase Image Size'}
          onClick={toggleReducedImage}
        />
      </div>
      <span className={Styles.stepCounter}>Steps: {pagesVisitedAmount}</span>
    </aside>
  )
}

export default MazeControls
