import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';

interface ImageSwitcherProps {
  lightImageSrc: string,
  darkImageSrc: string,
  style?: React.CSSProperties
}

const ImageSwitcher = ({lightImageSrc,darkImageSrc,style} : ImageSwitcherProps) => {
  const { colorMode } = useColorMode();

  return (
    <img 
      src={colorMode === 'dark' ? darkImageSrc : lightImageSrc}
      style={style} alt="Example banner"
    />
  )
}

export default ImageSwitcher;