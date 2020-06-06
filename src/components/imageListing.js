import React from 'react';
import LazyImage from './lazyImage';

const imageListing = () => {
 const arrayofImages = [
  'https://specials-images.forbesimg.com/imageserve/5dd6e31fe0af7b0006b1f029/960x0.jpg?fit=scale',
  'https://specials-images.forbesimg.com/imageserve/5dd6e3cfe0af7b0006b1f039/960x0.jpg?fit=scale',
  'https://specials-images.forbesimg.com/imageserve/5dd6e5a9e0af7b0006b1f06a/960x0.jpg?fit=scale',
  'https://specials-images.forbesimg.com/imageserve/5dd6e5cbea103f000653006b/960x0.jpg?fit=scale',
  'https://specials-images.forbesimg.com/imageserve/5dd836262c886a0007ecd0fb/960x0.jpg?fit=scale',
  'https://specials-images.forbesimg.com/imageserve/5dd83a0ee0af7b0006b20aff/960x0.jpg?fit=scale'
 ];

return arrayofImages.map((image,idx) => 
  <div key={idx} style={{marginTop: '10px'}}>
    <LazyImage src={image} alt='unable to load image' styleClass={{height: '250px', width: '500px'}} />
  </div>
 );
}

export default imageListing;