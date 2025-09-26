import { useEffect, useRef, useState } from 'react';
import { Box, HStack, IconButton, Image, useColorModeValue } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ServiceSlider({ images = [], intervalMs = 3500, height = '360px', borderRadius = 'lg', fit = 'cover', bg, backdrop = false }) {
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
              filter="blur(14px)"
              transform="scale(1.08)"
              opacity={i === index ? 0.6 : 0}
              transition="opacity 0.6s ease"
            />
          )}
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
            transform={i === index ? 'scale(1)' : (fit === 'contain' ? 'scale(1)' : 'scale(1.02)')}
            transition="opacity 0.6s ease, transform 0.8s ease"
            loading="lazy"
          />
        </Box>
      ))}

      <IconButton
        aria-label="Anterior"
        icon={<FaChevronLeft />}
        size="sm"
        position="absolute"
        top="50%"
        left={2}
        transform="translateY(-50%)"
        onClick={() => handleManual(prev)}
        variant="ghost"
        colorScheme="whiteAlpha"
      />
      <IconButton
        aria-label="Próximo"
        icon={<FaChevronRight />}
        size="sm"
        position="absolute"
        top="50%"
        right={2}
        transform="translateY(-50%)"
        onClick={() => handleManual(next)}
        variant="ghost"
        colorScheme="whiteAlpha"
      />

      <HStack spacing={2} position="absolute" bottom={3} left="50%" transform="translateX(-50%)">
        {images.map((_, i) => (
          <Box
            key={i}
            w={i === index ? 3 : 2}
            h={i === index ? 3 : 2}
            borderRadius="full"
            bg={i === index ? bgDotActive : bgDot}
            cursor="pointer"
            onClick={() => handleManual(() => setIndex(i))}
            border={i === index ? '1px solid rgba(0,0,0,0.15)' : 'none'}
          />
        ))}
      </HStack>
    </Box>
  );
}
