import { useContext, useState } from 'react'

import Styles from './MazeControls.module.css'
import {
  faCircleInfo,
  faTextSlash,
  faQuoteLeft,
  faWindowRestore,
  faArrowsToCircle,
  faArrowsLeftRightToLine,
  faAngleDown,
  faAngleUp,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons'
import MazeControlsButton from '@/components/MazeControlsButton/MazeControlsButton'
import MazeHistory from '@/components/MazeHistory/MazeHistory'
import { MazeContext } from '@/store/MazeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MazeControls({
  onToggleShowInstructions,
  showInstructions,
  onToggleShowCopyright,
  showCopyright,
}) {
  const {
    toggleShowText,
    pagesVisited,
    showText,
    reducedImage,
    toggleReducedImage,
    mazeStarted,
  } = useContext(MazeContext)

  const [hideControls, setHideControls] = useState(false)

  const mazeControlsClasses = `${Styles.mazeControls} ${hideControls ? Styles['mazeControls--hidden'] : ''}`

  const pagesVisitedAmount = pagesVisited.length // +1 for the current page

  const showingAuxiliary = showInstructions || showCopyright
  const showingInstructionsOnly = showInstructions && !showCopyright
  const showingCopyrightOnly = showCopyright && !showInstructions

  return (
    <aside
      style={{ display: mazeStarted ? 'flex' : 'none' }}
      className={mazeControlsClasses}
    >
      <div>
        {/* Toggle text */}
        {!showingAuxiliary && (
          <MazeControlsButton
            icon={showText ? faTextSlash : faQuoteLeft}
            text={showText ? 'Hide Text' : 'Show Text'}
            title="Toggle text"
            onClick={toggleShowText}
          />
        )}
        {/* Toggle image size */}
        {!showingAuxiliary && (
          <MazeControlsButton
            icon={reducedImage ? faArrowsLeftRightToLine : faArrowsToCircle}
            text={reducedImage ? 'Increase Image Size' : 'Reduce Image Size'}
            title="Toggle image size"
            onClick={toggleReducedImage}
            className={Styles.mazeButtonImage}
          />
        )}
        {/* Toggle Instructions */}
        {!showingCopyrightOnly && (
          <MazeControlsButton
            icon={showInstructions ? faWindowRestore : faCircleInfo}
            text={showInstructions ? 'Hide Instructions' : 'Show Instructions'}
            title="Toggle instructions"
            onClick={onToggleShowInstructions}
          />
        )}
        {/* Copyright */}
        {!showingInstructionsOnly && (
          <MazeControlsButton
            icon={showCopyright ? faWindowRestore : faCopyright}
            text={showCopyright ? 'Hide Copyright' : 'Show Copyright'}
            title="Toggle copyright"
            onClick={onToggleShowCopyright}
            className={Styles.mazeButtonCopyright}
          />
        )}
      </div>
      <div>
        <MazeHistory />
        <span className={Styles.stepCounter}>Steps: {pagesVisitedAmount}</span>
      </div>
      <button
        className={Styles.mazeControlsToggle}
        onClick={() => setHideControls(!hideControls)}
        type="button"
        title="Toggle controls"
      >
        <FontAwesomeIcon icon={hideControls ? faAngleUp : faAngleDown} />
      </button>
    </aside>
  )
}

export default MazeControls
