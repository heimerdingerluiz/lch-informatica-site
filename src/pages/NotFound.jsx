import { Box, Button, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.500, teal.500)',
    'linear(to-r, blue.600, teal.600)'
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        color="white"
        py={32}
        px={4}
        textAlign="center"
        w="100vw"
        mx="calc(50% - 50vw)"
      >
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Box
              bg="whiteAlpha.200"
              p={6}
              borderRadius="full"
              display="inline-flex"
              mb={4}
            >
              <FaExclamationTriangle size={48} />
            </Box>
            <Heading as="h1" size="2xl" mb={4}>
              Página Não Encontrada
            </Heading>
            <Text fontSize="xl" maxW="2xl" mb={8}>
              Ops! A página que você está procurando não existe ou foi movida.
            </Text>
            <Button 
              as={RouterLink} 
              to="/" 
              variant="cta" 
              size="lg"
              leftIcon={<FaHome />}
            >
              Voltar para a Página Inicial
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Additional Help Section */}
      <Box py={20} px={4}>
        <Container maxW="container.lg">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">Como podemos ajudar?</Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl">
              Aqui estão alguns links que podem ser úteis para você:
            </Text>
            
            <Box 
              display="grid" 
              gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} 
              gap={6} 
              w="full"
              mt={8}
            >
              <Box 
                p={6} 
                borderWidth="1px" 
                borderRadius="lg" 
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'lg',
                  transition: 'all 0.3s',
                }}
              >
                <Heading as="h3" size="md" mb={3}>Nossos Serviços</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
                  Conheça todos os serviços que oferecemos para manutenção de computadores e câmeras de segurança.
                </Text>
                <Button as={RouterLink} to="/servicos" variant="primary" size="sm">
                  Ver Serviços
                </Button>
              </Box>

              <Box 
                p={6} 
                borderWidth="1px" 
                borderRadius="lg"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'lg',
                  transition: 'all 0.3s',
                }}
              >
                <Heading as="h3" size="md" mb={3}>Fale Conosco</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
                  Precisa de ajuda? Entre em contato com nossa equipe de suporte.
                </Text>
                <Button as={RouterLink} to="/contato" variant="primary" size="sm">
                  Contato
                </Button>
              </Box>

              <Box 
                p={6} 
                borderWidth="1px" 
                borderRadius="lg"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'lg',
                  transition: 'all 0.3s',
                }}
              >
                <Heading as="h3" size="md" mb={3}>Sobre Nós</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
                  Conheça mais sobre nossa empresa e nossa equipe de especialistas.
                </Text>
                <Button as={RouterLink} to="/sobre" variant="primary" size="sm">
                  Sobre Nós
                </Button>
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default NotFound;
