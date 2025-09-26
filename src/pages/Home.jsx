import { Box, Button, Container, Flex, Heading, Stack, Text, useColorModeValue, VStack, SimpleGrid, Icon, Grid, GridItem } from '@chakra-ui/react';
import { FaTools, FaVideo, FaShieldAlt, FaLaptopHouse, FaShoppingCart } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import ServiceSlider from '../components/ServiceSlider';

const services = [
  {
    icon: FaTools,
    title: 'Manutenção de Computadores',
    description: 'Soluções completas para manutenção preventiva e corretiva de desktops e notebooks.'
  },
  {
    icon: FaVideo,
    title: 'Câmeras de Segurança',
    description: 'Instalação e manutenção de sistemas de monitoramento e segurança residencial e comercial.'
  },
  {
    icon: FaShieldAlt,
    title: 'Segurança Digital',
    description: 'Proteção contra vírus, backup de dados e recuperação de informações importantes.'
  },
  {
    icon: FaLaptopHouse,
    title: 'Suporte Remoto',
    description: 'Atendimento remoto rápido e eficiente para resolver seus problemas sem sair de casa.'
  }
];

const Home = () => {
  const heroGradient = useColorModeValue('linear(to-r, blue.500, teal.500)', 'linear(to-r, blue.600, teal.600)');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient={heroGradient}
        color="white"
        py={32}
        px={4}
        textAlign="center"
        w="100vw"
        mx="calc(50% - 50vw)"
      >
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', md: '1.4fr 1fr' }} gap={{ base: 8, md: 10 }} alignItems="center">
            <GridItem>
              <VStack spacing={6}>
                <Heading as="h1" size="2xl" mb={4}>
                  Soluções em Manutenção de Computadores e Câmeras
                </Heading>
                <Text fontSize="xl" maxW="2xl" mb={2}>
                  Serviços especializados em manutenção de computadores e instalação de câmeras de segurança para sua casa ou empresa.
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
                  <Button as={RouterLink} to="/contato" variant="cta" size="lg">
                    Solicitar Orçamento
                  </Button>
                  <Button as={RouterLink} to="/servicos" variant="cta" size="lg">
                    Nossos Serviços
                  </Button>
                  <Button as={RouterLink} to="/produtos" leftIcon={<FaShoppingCart />} size="lg" variant="primary">
                    Ver Produtos
                  </Button>
                </Stack>
              </VStack>
            </GridItem>
            <GridItem display={{ base: 'none', md: 'block' }}>
              <ServiceSlider
                height="360px"
                images={[
                  '/servicos/servico1.jpg?v=2',
                  '/servicos/servico2.jpg?v=2',
                  '/servicos/servico3.jpg?v=2'
                ]}
                fit="contain"
                bg="gray.100"
                backdrop
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} px={4}>
        <Container maxW="container.lg">
          <VStack spacing={12}>
            <VStack textAlign="center" spacing={4} maxW="2xl" mx="auto">
              <Text color="blue.500" fontWeight="bold">NOSSOS SERVIÇOS</Text>
              <Heading as="h2" size="xl">Soluções Completas para Suas Necessidades</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>
                Oferecemos serviços especializados para garantir o melhor desempenho do seu equipamento e a segurança do seu patrimônio.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              {services.map((service, index) => (
                <Box
                  key={index}
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'lg',
                    transition: 'all 0.2s',
                  }}
                  bg={useColorModeValue('white', 'gray.800')}
                >
                  <VStack spacing={4} align="flex-start">
                    <Flex
                      w={12}
                      h={12}
                      bg={useColorModeValue('blue.50', 'blue.900')}
                      color={useColorModeValue('blue.500', 'blue.300')}
                      borderRadius="full"
                      align="center"
                      justify="center"
                    >
                      <Icon as={service.icon} boxSize={6} />
                    </Flex>
                    <Heading as="h3" size="md">{service.title}</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>
                      {service.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20} px={4}>
        <Container maxW="container.lg" textAlign="center">
          <VStack spacing={6} maxW="3xl" mx="auto">
            <Heading as="h2" size="xl">Precisa de ajuda com seu equipamento?</Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
              Entre em contato agora mesmo e agende uma visita técnica sem compromisso.
            </Text>
            <Button as={RouterLink} to="/contato" colorScheme="blue" size="lg">
              Fale Conosco
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
