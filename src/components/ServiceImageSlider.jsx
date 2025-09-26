import { useEffect, useRef, useState } from 'react';
import { Box, Image, Progress, HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
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
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const frameBg = bg ?? useColorModeValue('gray.100', 'gray.800');
  const progressColor = useColorModeValue('blue.500', 'blue.300');

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setProgress(0);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  };

  // Efeito para trocar as imagens automaticamente
  useEffect(() => {
    if (images.length <= 1) return;
    
    // Inicia a animação da barra de progresso
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / intervalMs) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        progressRef.current = requestAnimationFrame(updateProgress);
      }
    };
    
    progressRef.current = requestAnimationFrame(updateProgress);
    
    // Configura o timer para trocar de imagem
    timerRef.current = setTimeout(() => {
      next();
    }, intervalMs);
    
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(progressRef.current);
    };
  }, [index, images.length, intervalMs]);

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
      {/* Imagem atual */}
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
      
      {/* Barra de progresso */}
      {images.length > 1 && (
        <Box position="absolute" bottom="0" left="0" right="0">
          <Progress 
            value={progress} 
            size="xs" 
            colorScheme="blue" 
            bg="transparent"
            borderRadius="0"
            sx={{
              '& > div': {
                transition: 'width 0.1s linear',
                backgroundColor: progressColor
              }
            }}
          />
        </Box>
      )}
      
      {/* Navegação manual */}
      {images.length > 1 && (
        <>
          <IconButton
            aria-label="Imagem anterior"
            icon={<FaChevronLeft />}
            position="absolute"
            left={2}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={prev}
            variant="ghost"
            colorScheme="whiteAlpha"
            color="white"
            _hover={{ bg: 'blackAlpha.400' }}
            _active={{ bg: 'blackAlpha.500' }}
            size="sm"
            borderRadius="full"
            boxShadow="md"
          />
          <IconButton
            aria-label="Próxima imagem"
            icon={<FaChevronRight />}
            position="absolute"
            right={2}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={next}
            variant="ghost"
            colorScheme="whiteAlpha"
            color="white"
            _hover={{ bg: 'blackAlpha.400' }}
            _active={{ bg: 'blackAlpha.500' }}
            size="sm"
            borderRadius="full"
            boxShadow="md"
          />
        </>
      )}
    </Box>
  );
}
