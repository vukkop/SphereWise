import React, { useState } from 'react'

const ImageWithLoading = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div style={{ position: 'relative' }}>
      {loading && <div className="skeleton w-32 h-32"></div>}
      <img
        src={src}
        alt={alt}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={handleImageLoaded}
      />
    </div>
  );
}

export default ImageWithLoading
