import React from 'react'

const ImageWithBorder = ({ src, alt }) => (
    <span style={imageBorderStyle}>
      <img
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '180px',
          height: '50px',
        }}
        src={src}
        srcSet={src}
        loading="lazy"
        alt={alt}
      /> 
    </span>
  );
  const imageBorderStyle = {
    border: '3px solid black',
    height: '54px',
    padding: '8px',
    borderRadius: '22px',
    margin: '5px',
  };
  
export default ImageWithBorder
  


  