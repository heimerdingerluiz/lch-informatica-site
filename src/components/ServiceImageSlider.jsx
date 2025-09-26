import { useEffect, useState } from 'react';
import { Box, Image, useColorModeValue } from '@chakra-ui/react';

// URLs das imagens
const defaultImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
];

export default function ServiceImageSlider({ 
  images = defaultImages, 
  intervalMs = 3000, 
  height = '360px',
  fit = 'cover',
  bg,
  borderRadius = 'lg'
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const frameBg = bg ?? useColorModeValue('gray.100', 'gray.800');

  // Efeito para trocar as imagens automaticamente
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);
    
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  if (!images?.length) {
    return (
      <Box
        h={height}
        borderRadius={borderRadius}
        bg={frameBg}
      />
    );
  }

  return (
    <Box 
      position="relative" 
      h={height} 
      borderRadius={borderRadius} 
      overflow="hidden" 
      boxShadow="md" 
      bg={fit === 'contain' ? frameBg : 'transparent'}
    >
      <Image
        src={images[currentIndex]}
        alt={`Serviço ${currentIndex + 1}`}
        w="100%"
        h="100%"
        objectFit={fit}
        objectPosition="center"
        loading="lazy"
      />
    </Box>
  );
}
