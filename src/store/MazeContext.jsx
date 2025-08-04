import { createContext } from 'react'

export const MazeContext = createContext({
  currentPage: 0,
  showText: true,
  showInstructions: false,
  pagesVisited: [],
  updateCurrentPage: () => {},
  toggleShowText: () => {},
  toggleShowInstructions: () => {},
})
