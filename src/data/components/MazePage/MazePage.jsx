import React from 'react'

import Styles from './MazePage.module.css'

function MazePage() {
   const imgHref = '/maze-images/webp/00.webp';
  return (
    <div className={Styles.mazePage}>
      <picture>
         <source srcSet={imgHref} />
      </picture>
      <img src={imgHref} />
    </div>
  )
}

export default MazePage