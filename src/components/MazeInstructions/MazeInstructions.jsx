import { memo, useContext } from 'react'

import MazeDivider from '@/components/MazeDivider/MazeDivider'
import { MazeContext } from '@/store/MazeContext'

import Styles from './MazeInstructions.module.css'

function MazeInstructions({ onToggleShowInstructions }) {
  const { mazeStarted, setMazeStarted } = useContext(MazeContext)

  const startMaze = () => {
    setMazeStarted(true)
    onToggleShowInstructions()
  }

  return (
    <div className={Styles.mazeInstructions}>
      <MazeDivider />
      <br />
      <p>This is not really a book.</p>
      <p>
        This is a building in the shape of a book…a maze. Each numbered page
        depicts a room in the Maze. The doors in each room lead to other rooms.
        For example, the room on page 1 has doors leading to rooms 20, 26, 41,
        and 21. To go through door number 20, simply turn to page 20.
      </p>
      <p>
        Your challenge is to find your way from room 1 (after the Prologue) to
        room 45 and then back to room 1 using the shortest possible path. If you
        use your head, you should be able to make the journey in only sixteen
        steps.
      </p>
      <p>
        There are any number of clues in the drawings and in the story to help
        you choose the right door in each room. Clues in a series of rooms may
        relate to each one another, and may indicate a path. Other clues may
        refer to a specific door in a single room.
      </p>
      <p>Anything in this book might be a clue.</p>
      <p>Not all clues are necessarily trustworthy.</p>
      <p>
        Once you've found the shortest path in and out of the Maze, challenge
        yourself further. Go back and find the riddle hidden in room 45. The
        answer to that riddle is concealed somewhere on the shortest path.
      </p>

      <p>Now proceed to the Prologue …your guide awaits you.</p>
      {!mazeStarted && (
        <button
          className={Styles['mazeInstructions__button']}
          onClick={startMaze}
        >
          Start
        </button>
      )}
      <br />
      <MazeDivider />
    </div>
  )
}

export default memo(MazeInstructions)
