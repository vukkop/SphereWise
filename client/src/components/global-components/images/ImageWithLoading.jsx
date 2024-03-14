import React, { useState } from 'react'

const ImageWithLoading = ({ src, alt, classes, skeletClasses }) => {
  const [loading, setLoading] = useState(true);
  if (!classes) {
    classes = ''
  }
  if (!skeletClasses) {
    skeletClasses = ''
  }

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <div className={`skeleton ${skeletClasses} ${classes}`}></div>}
      <img
        src={src}
        alt={alt}
        className={classes}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={handleImageLoaded}
      />
    </>
  );
}

export default ImageWithLoading
