import React from 'react';

interface ImageSwitcherProps {
  lightImageSrc: string,
  darkImageSrc: string,
  alt: string,
  style?: React.CSSProperties,
  className?: string
}

function ImageSwitcher({
  lightImageSrc, darkImageSrc, alt, style, className,
} : ImageSwitcherProps) {
  let darkClassName = 'dark-theme-display-component';
  let lightClassName = 'light-theme-display-component';

  if (className) {
    darkClassName = `${darkClassName} ${className}`;
    lightClassName = `${lightClassName} ${className}`;
  }
  return (
    <>
      <img
        style={style}
        alt={alt}
        src={lightImageSrc}
        className={lightClassName}
      />
      <img
        style={style}
        alt={alt}
        src={darkImageSrc}
        className={darkClassName}
      />
    </>
  );
}

export default ImageSwitcher;
