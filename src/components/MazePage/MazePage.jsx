import { useState, useEffect, useRef, useContext } from 'react'

import MazeDoor from '@/components/MazeDoor/MazeDoor'
import MazeDivider from '@/components/MazeDivider/MazeDivider'
import { MazeContext } from '@/store/MazeContext'

import Styles from './MazePage.module.css'
import { getLocation } from '@/helpers/devUtils'

function MazePage() {
  const [pageData, setPageData] = useState(null)

  const { currentPageCode, showText, reducedImage, restartMaze } =
    useContext(MazeContext)

  const myRef = useRef(null)

  const imgHref = `/maze-images/webp/${currentPageCode}.webp`

  // Get the JSON for the current page
  // and set the pageData state.
  // This will be used to render the page content.
  const fetchPageData = async (pageCode) => {
    const jsonUrl = `/pages/${pageCode}.json`
    console.log('Fetching page data from:', jsonUrl)
    try {
      const response = await fetch(jsonUrl)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setPageData(data)
    } catch (error) {
      console.error('Error fetching page data:', error)
    }
  }

  useEffect(() => {
    fetchPageData(currentPageCode)
  }, [currentPageCode])

  if (!pageData) {
    return <div>Loading...</div>
  }

  const PageText = () => (
    <div className={Styles.pageText}>
      {pageData.text.map((item, index) => (
        <p key={index} className={Styles.pageContent}>
          {item}
        </p>
      ))}
    </div>
  )

  const imageClasses = () => {
    const reducedClass = reducedImage ? Styles.mazeImage__reduced : ''

    return `${Styles.mazeImage} ${reducedClass}`
  }

  // No escaping the maze!
  const gameOver = currentPageCode === '24'

  return (
    <div className={Styles.mazePage}>
      {showText && (
        <div className={Styles.pageTextContainer}>
          <MazeDivider />
          <PageText key={currentPageCode} />
          <MazeDivider />
        </div>
      )}

      <div
        key={currentPageCode}
        onClick={getLocation}
        ref={myRef}
        className={imageClasses()}
      >
        {/* Image */}
        <picture>
          <source srcSet={imgHref} />
          <img src={imgHref} />
        </picture>

        {/* Doors */}
        {pageData.doors.map((door, index) => (
          <MazeDoor key={index} door={door} />
        ))}
      </div>
      {gameOver && (
        <button
          onClick={restartMaze}
          type="button"
          className={Styles['mazePage__button']}
        >
          Restart
        </button>
      )}
    </div>
  )
}

export default MazePage
