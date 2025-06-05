import React from 'react'

import Styles from './MazeDoor.module.css'

function MazeDoor({ door, onDoorClick }) {
  console.log('MazeDoor', door)

  console.log('Door data:', door)

  const doorStyle = {
    left: door.xPosStart + '%',
    top: door.yPosStart + '%',
    width: door.xPosEnd - door.xPosStart + '%',
    height: door.yPosEnd - door.yPosStart + '%',
  }

  const handleDoorClick = () => {
    console.log('Door clicked:', door.code)
    // Here you can add logic to handle the door click,
    // such as navigating to a new page or opening a modal.
    onDoorClick(door.code)
  }

  console.log('Door style:', doorStyle)

  return (
    <div
      className={`${Styles.door} ${door.hidden && Styles.doorHidden}`}
      style={doorStyle}
      onClick={handleDoorClick}
    />
  )
}

export default MazeDoor
