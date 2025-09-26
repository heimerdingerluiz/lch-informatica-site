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
      w="60%"
      h="60%"
      backgroundImage="url('https://i.imgur.com/9yS4y2n.png')"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      animation={`${rotate} 20s linear infinite`}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.6s ease"
    />
  );
};

export default RotatingComputer;
