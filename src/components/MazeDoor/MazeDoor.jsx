import React from 'react'

import Styles from './MazeDoor.module.css'

function MazeDoor({door}) {

   console.log('MazeDoor', door);

   console.log('Door data:', door);

   const doorStyle = {
      left: door.xPosStart + '%',
      top: door.yPosStart + '%',
      width: door.xPosEnd - door.xPosStart + '%',
      height: door.yPosEnd - door.yPosStart + '%',
   };

   console.log('Door style:', doorStyle);

  return (
    <div className={Styles.door} style={doorStyle} />
  )
}

export default MazeDoor