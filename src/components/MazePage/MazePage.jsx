import React, { useEffect } from 'react'

import Styles from './MazePage.module.css'

function MazePage({currentPageCode = '00'}) {

   const [pageData, setPageData] = React.useState(null);

   const imgHref = `/maze-images/webp/${currentPageCode}.webp`;

   // Get the JSON for the current page
   // and set the pageData state.
   // This will be used to render the page content.
   const fetchPageData = async (pageCode) => {
      const jsonUrl = `/pages/${pageCode}.json`;
      console.log('Fetching page data from:', jsonUrl);
      try {
         const response = await fetch(jsonUrl);
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setPageData(data);
      } catch (error) {
         console.error('Error fetching page data:', error);
      }
   };

   useEffect(() => {
      fetchPageData(currentPageCode);
   }, [currentPageCode]);

   if(!pageData) {
      return <div>Loading...</div>;
   }
  
  
   return (
    <div className={Styles.mazePage}>
      <div>
         {pageData.text.map((item, index) => (
            <p key={index} className={Styles.pageContent}>
               {item}
            </p>
         ))}
      </div>
      <picture>
         <source srcSet={imgHref} />
         <img src={imgHref} />
      </picture>
      
      
    </div>
  )
}

export default MazePage