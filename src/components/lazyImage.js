import React, { useEffect, useState, useRef } from 'react';

const registerObserver = (ref, setShowImage) => {
   const observer = new IntersectionObserver((enteries, observer)=>{
     enteries.forEach(entry => {
       if(!entry.isIntersecting){
         return;
       }
       setShowImage(true);
       observer.disconnect();
     })
   });
   observer.observe(ref)
}
const lazyImage = ({src, alt, styleClass}) => {
  const [showImage, setShowImage] = useState(false);
  const imageRef =  useRef(null);
  
  useEffect(()=>{
    registerObserver(imageRef.current, setShowImage); 
  }, []);

  if(showImage){
    return <img src={src} alt={alt} style={styleClass} />
  }

  return <div ref={imageRef} style={{backgroundColor: 'gray', margin: 'auto', ...styleClass}} />
}

export default lazyImage;