// src/components/ImageWidget.js
import React from 'react';
import useRandomImage from './useRandomImage';
import './Image.css';

function ImageWidget() {
  const image = useRandomImage(1000); // Cambia la imagen cada 30000 ms (30 segundos)

  return (
    <div className="image">
      <img src={image} alt="Random" />
    </div>
  );
}

export default ImageWidget;
