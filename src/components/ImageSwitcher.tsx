import React from 'react';

interface ImageSwitcherProps {
  lightImageSrc: string,
  darkImageSrc: string,
  style?: React.CSSProperties
}

const ImageSwitcher = ({lightImageSrc,darkImageSrc,style} : ImageSwitcherProps) => {
  return (
    <>
      <img 
        style={style} alt="Example banner"
        src={lightImageSrc}
        className='light-theme-display-component'
      />
      <img 
        style={style} alt="Example banner"
        src={darkImageSrc}
        className='dark-theme-display-component'
      />
    </>
  )
}

export default ImageSwitcher;