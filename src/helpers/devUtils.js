// Make setting positions easier by clicking on the element
export const getLocation = (ev) => {

      if(!window.coords) {
         window.coords = {
            xPosStart: 0,
            xPosEnd: 0,
            yPosStart: 0,
            yPosEnd: 0
         };
      }

      const event = ev.nativeEvent;
      
       // Get the click coordinates relative to the target element
            const offsetX = event.offsetX;
            const offsetY = event.offsetY;

            // Get the dimensions of the target element
            const elementWidth = event.target.clientWidth;
            const elementHeight = event.target.clientHeight;

            // Calculate the percentage
            // Ensure elementWidth/Height are not zero to prevent division by zero errors
            const percentageX = elementWidth > 0 ? (offsetX / elementWidth) * 100 : 0;
            const percentageY = elementHeight > 0 ? (offsetY / elementHeight) * 100 : 0;

            // Optional: Log to console for debugging
            // console.log(`  Percentage X: ${percentageX.toFixed(2)}%, Percentage Y: ${percentageY.toFixed(2)}%`);

            if(window.coords.xPosStart === 0) {
               window.coords.xPosStart = percentageX.toFixed(0);
               window.coords.yPosStart = percentageY.toFixed(0);
            } else {
               window.coords.xPosEnd = percentageX.toFixed(0);
               window.coords.yPosEnd = percentageY.toFixed(0);
               const data = `"xPosStart": ${window.coords.xPosStart}, "xPosEnd": ${window.coords.xPosEnd}, "yPosStart": ${window.coords.yPosStart}, "yPosEnd": ${window.coords.yPosEnd}`;
               
               // copy to clipboard
               navigator.clipboard.writeText(data)
                  .then(() => {
                     console.log('Coordinates copied to clipboard:', data);
                  })
                  .catch(err => {
                     console.error('Failed to copy coordinates:', err);
                  });
               window.coords = {
                  xPosStart: 0,
                  xPosEnd: 0,
                  yPosStart: 0,
                  yPosEnd: 0
               };
            }
   }