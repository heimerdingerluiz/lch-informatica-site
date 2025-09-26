import { useEffect, useRef, useState } from 'react';
import { Box, HStack, IconButton, Image, useColorModeValue } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RotatingComputer from './RotatingComputer';

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
  const bgDot = useColorModeValue('blackAlpha.400', 'whiteAlpha.500');
  const bgDotActive = useColorModeValue('whiteAlpha.900', 'white');
  const frameBg = bg ?? useColorModeValue('gray.100', 'gray.800');

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!images.length) return;
    timerRef.current = setInterval(next, intervalMs);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, intervalMs]);

  const handleManual = (go) => {
    clearInterval(timerRef.current);
    go();
    timerRef.current = setInterval(next, intervalMs);
  };

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
      {images.map((src, i) => (
        <Box key={i} position="absolute" inset={0}>
          {/* Blurred backdrop to fill sides when using contain */}
          {backdrop && (
            <Box
              position="absolute"
              inset={0}
              bgImage={`url(${src})`}
              bgSize="cover"
              bgPos="center"
              transform="scale(1.08)"
              opacity={i === index ? 0.6 : 0}
              transition="opacity 0.6s ease"
            />
          )}
          <Box position="relative" w="100%" h="100%" overflow="hidden">
            <Image
              src={src}
              alt={`Serviço ${i + 1}`}
              position="absolute"
              inset={0}
              w="100%"
              h="100%"
              objectFit={fit}
              objectPosition="center"
              opacity={i === index ? 1 : 0}
              transition="opacity 0.6s ease"
              loading="lazy"
            />
            {/* Computador com animação de rotação - apenas na primeira imagem */}
            {i === 0 && (
              <Box position="absolute" top={0} left={0} w="100%" h="100%">
                <RotatingComputer isVisible={i === index} />
              </Box>
            )}
          </Box>
        </Box>
      ))}
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <IconButton
            aria-label="Imagem anterior"
            icon={<FaChevronLeft />}
            position="absolute"
            left={4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={() => handleManual(prev)}
            variant="ghost"
            colorScheme="whiteAlpha"
            color="white"
            _hover={{ bg: 'blackAlpha.400' }}
            _active={{ bg: 'blackAlpha.500' }}
            size="lg"
            borderRadius="full"
            boxShadow="md"
          />
          <IconButton
            aria-label="Próxima imagem"
            icon={<FaChevronRight />}
            position="absolute"
            right={4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={() => handleManual(next)}
            variant="ghost"
            colorScheme="whiteAlpha"
            color="white"
            _hover={{ bg: 'blackAlpha.400' }}
            _active={{ bg: 'blackAlpha.500' }}
            size="lg"
            borderRadius="full"
            boxShadow="md"
          />
        </>
      )}
      
      {/* Dots Navigation */}
      {images.length > 1 && (
        <HStack spacing={2} position="absolute" bottom={4} left="50%" transform="translateX(-50%)" zIndex={1}>
          {images.map((_, i) => (
            <Box
              key={i}
              as="button"
              onClick={() => handleManual(() => setIndex(i))}
              w={i === index ? 4 : 2}
              h={2}
              borderRadius="full"
              bg={i === index ? bgDotActive : bgDot}
              transition="all 0.2s"
              _hover={{ bg: 'whiteAlpha.700' }}
              _focus={{ outline: 'none' }}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
}
