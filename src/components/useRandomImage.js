// src/components/useRandomImage.js
import { useState, useEffect } from 'react';

const images = [
  'https://picsum.photos/150/150.jpg',
  'https://picsum.photos/150/150?grayscale',
  'https://picsum.photos/seed/picsum/150/150',
  'https://picsum.photos/seed/picsum/150/150',
  'https://picsum.photos/150/150?grayscale',
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export default function useRandomImage(interval) {
  const [image, setImage] = useState(getRandomImage());

  useEffect(() => {
    const id = setInterval(() => {
      setImage(getRandomImage());
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  return image;
}
