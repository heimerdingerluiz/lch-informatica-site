import { Box, keyframes } from '@chakra-ui/react';

// Animação de rotação suave
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const RotatingComputer = ({ isVisible }) => {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="200px"
      height="200px"
      zIndex={10}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.6s ease"
    >
      <Box
        as="img"
        src="https://i.imgur.com/9yS4y2n.png"
        alt="Computador girando"
        width="100%"
        height="100%"
        objectFit="contain"
        animation={`${rotate} 20s linear infinite`}
        transformOrigin="center center"
      />
    </Box>
  );
};

export default RotatingComputer;
