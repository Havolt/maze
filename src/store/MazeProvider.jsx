import { useState, useMemo } from "react";

import { MazeContext } from "./MazeContext";

const MAX_PAGE = 45

export const MazeProvider = ({children}) => {
   const [currentPage, setCurrentPage] = useState(0)
   const [showText, setShowText] = useState(true)
   const [showInstructions, setShowInstructions] = useState(false)
   const [pagesVisited, setPagesVisited] = useState([])

   const currentPageCode = useMemo(
      () => currentPage.toString().padStart(2, '0'),
      [currentPage]
   )
   
   // ! Memoize later
   const updateCurrentPage = (newPage) => {
      if (newPage < 0 || newPage > MAX_PAGE) {
      console.warn(
         `Invalid page update: ${newPage}. Must be between 0 and ${MAX_PAGE}.`
      )
      return
      }
      setPagesVisited([...pagesVisited, currentPageCode])
      setCurrentPage(newPage)
   }

   // ! Memoize later with useCallback
   const toggleShowText = () => {
      setShowText(!showText)
   }
   
   const toggleShowInstructions = () => {
      setShowInstructions(!showInstructions)
   }

   const mazeCtx = {
      currentPage,
      showText,
      showInstructions,
      pagesVisited,
      updateCurrentPage,
      toggleShowText,
      toggleShowInstructions,
   }


   return (<MazeContext.Provider value={mazeCtx}>
      {children}
   </MazeContext.Provider>)
}


