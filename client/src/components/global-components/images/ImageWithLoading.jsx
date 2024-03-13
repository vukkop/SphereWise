import React, { useState } from 'react'

const ImageWithLoading = ({ src, alt, classes }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setTimeout(() => {
      console.log(classes);
      setLoading(false);
    }, 5000);
  };

  return (
    <div style={{ position: 'relative' }}>
      {loading && <div className={`skeleton ${classes}`}></div>}
      <img
        src={src}
        alt={alt}
        className={classes}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={handleImageLoaded}
      />
    </div>
  );
}

export default ImageWithLoading
