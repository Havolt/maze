import { memo } from 'react'

import MazeDivider from '@/components/MazeDivider/MazeDivider'

import Styles from './MazeCopyright.module.css'

function MazeCopyright() {
  return (
    <div className={Styles.mazeCopyright}>
      <MazeDivider />
      <br />
      <p>All copyright belongs for text and images to Christopher Manson.</p>
      <p> This is simply a love letter to his incredible work.</p>
      <br />
      <MazeDivider />
    </div>
  )
}

export default memo(MazeCopyright)
