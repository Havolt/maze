import React, { useState, useEffect, useRef, useContext } from 'react'

import MazeDoor from '../MazeDoor/MazeDoor'
import Styles from './MazePage.module.css'
import { MazeContext } from '@/store/MazeContext'

import { getLocation } from '@/helpers/devUtils'

function MazePage() {
  const [pageData, setPageData] = useState(null)

  const { currentPageCode, showText } = useContext(MazeContext)

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

  return (
    <div className={Styles.mazePage}>
      {showText && <PageText />}
      <div className={Styles.mazeImage} onClick={getLocation} ref={myRef}>
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
    </div>
  )
}

export default MazePage
