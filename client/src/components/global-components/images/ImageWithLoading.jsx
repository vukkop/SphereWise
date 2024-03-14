import React, { useState } from 'react'

const ImageWithLoading = ({ src, alt, classes }) => {
  const [loading, setLoading] = useState(true);
  if (!classes) {
    classes = ''
  }

  const handleImageLoaded = () => {
    setTimeout(() => {

      setLoading(false);
    }, 5000);
  };

  return (
    <>
      {loading && <div className={`skeleton ${classes}`}></div>}
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
