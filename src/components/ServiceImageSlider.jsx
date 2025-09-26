import { useEffect, useRef, useState } from 'react';
import { Box, HStack, IconButton, Image, useColorModeValue } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Importando as imagens diretamente
import servico1 from '../assets/servico1.jpg';
import servico2 from '../assets/servico2.jpg';
import servico3 from '../assets/servico3.jpg';

// Array de imagens importadas
const defaultImages = [servico1, servico2, servico3];

export default function ServiceImageSlider({ 
  images = defaultImages, 
  intervalMs = 3500, 
  height = '360px', 
  borderRadius = 'lg', 
  fit = 'cover', 
  bg, 
  backdrop = false 
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const frameBg = bg ?? useColorModeValue('gray.100', 'gray.800');

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Removido o efeito de troca automática de imagens

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
    <Box position="relative" h={height} borderRadius={borderRadius} overflow="hidden" boxShadow="md" bg={fit === 'contain' ? frameBg : 'transparent'}>
      {/* Mostra apenas a imagem atual sem animação */}
      <Box position="relative" w="100%" h="100%" overflow="hidden">
        <Image
          src={images[index]}
          alt={`Serviço ${index + 1}`}
          w="100%"
          h="100%"
          objectFit={fit}
          objectPosition="center"
          loading="lazy"
        />
      </Box>
      
      {/* Navegação removida */}
    </Box>
  );
}
