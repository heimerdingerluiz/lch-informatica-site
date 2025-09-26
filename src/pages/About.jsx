import { Box, Container, Grid, GridItem, Heading, Text, VStack, HStack, Image, useColorModeValue, Button, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaTools, FaUsers, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const teamMembers = [
  {
    name: 'João Silva',
    role: 'Técnico em Informática',
    experience: '10+ anos',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Maria Santos',
    role: 'Especialista em CFTV',
    experience: '8+ anos',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Carlos Oliveira',
    role: 'Técnico em Redes',
    experience: '7+ anos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const values = [
  {
    icon: FaTools,
    title: 'Excelência Técnica',
    description: 'Nossa equipe é composta por profissionais altamente qualificados e em constante atualização.'
  },
  {
    icon: FaShieldAlt,
    title: 'Segurança',
    description: 'Priorizamos a segurança dos seus dados e do seu patrimônio em todos os nossos serviços.'
  },
  {
    icon: FaHandshake,
    title: 'Compromisso',
    title: 'Compromisso',
    description: 'Cumprimos prazos e mantemos nossa palavra em todos os serviços prestados.'
  },
  {
    icon: FaUsers,
    title: 'Atendimento Personalizado',
    description: 'Entendemos que cada cliente tem necessidades únicas e oferecemos soluções personalizadas.'
  }
];

const About = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const iconColor = useColorModeValue('blue.500', 'blue.400');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, blue.500, teal.500)"
        color="white"
        py={32}
        px={4}
        textAlign="center"
        w="100vw"
        mx="calc(50% - 50vw)"
      >
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Heading as="h1" size="2xl" mb={4}>
              Sobre Nós
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Conheça nossa história, missão e equipe de especialistas em manutenção de computadores e câmeras de segurança.
            </Text>
            <Text fontSize="md" maxW="3xl">
              Especialistas em manutenção de computadores e instalação de câmeras de segurança. Atendimento rápido e especializado.
            </Text>
            <Text fontSize="md" maxW="3xl">
              Equipe especializada em manutenção de computadores, instalação de câmeras de segurança e sistemas de alarme residenciais, proporcionando atendimento rápido, eficiente e de alta qualidade.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Our Story */}
      <Box py={20} px={4}>
        <Container maxW="container.lg">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <Box>
              <Text color="blue.500" fontWeight="bold" mb={4}>NOSSA HISTÓRIA</Text>
              <Heading as="h2" size="xl" mb={6} lineHeight="tall">
                Mais de 10 anos oferecendo soluções em tecnologia
              </Heading>
              <Text color={textColor} mb={4} lineHeight="tall">
                Fundada em 2013, a LCH Informática nasceu da paixão por tecnologia e do desejo de oferecer serviços de qualidade em manutenção de computadores e instalação de câmeras de segurança.
              </Text>
              <Text color={textColor} mb={6} lineHeight="tall">
                Ao longo dos anos, nos especializamos em fornecer soluções personalizadas para clientes residenciais e empresariais, sempre com foco na qualidade do atendimento e na satisfação de nossos clientes.
              </Text>
              <Button as={RouterLink} to="/servicos" variant="primary">
                Nossos Serviços
              </Button>
            </Box>
            <Box 
              bg="gray.200" 
              h="400px" 
              borderRadius="lg" 
              overflow="hidden"
              position="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Equipe de TI trabalhando"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Our Values */}
      <Box bg={bgColor} py={20} px={4}>
        <Container maxW="container.lg">
          <VStack spacing={12} textAlign="center">
            <Box maxW="2xl">
              <Text color="blue.500" fontWeight="bold" mb={4}>NOSSOS VALORES</Text>
              <Heading as="h2" size="xl" mb={4}>O que nos torna diferentes</Heading>
              <Text color={textColor}>
                Nossos valores fundamentais orientam cada decisão que tomamos e cada serviço que prestamos.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              {values.map((value, index) => (
                <Box 
                  key={index} 
                  bg={cardBg} 
                  p={6} 
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'lg',
                    transition: 'all 0.3s',
                  }}
                >
                  <Flex
                    w={12}
                    h={12}
                    bg="blue.50"
                    color={iconColor}
                    borderRadius="full"
                    align="center"
                    justify="center"
                    mb={4}
                  >
                    <value.icon size={24} />
                  </Flex>
                  <Heading as="h3" size="md" mb={2}>{value.title}</Heading>
                  <Text color={textColor}>{value.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Our Team */}
      <Box py={20} px={4}>
        <Container maxW="container.lg">
          <VStack spacing={12} textAlign="center">
            <Box maxW="2xl">
              <Text color="blue.500" fontWeight="bold" mb={4}>NOSSA EQUIPE</Text>
              <Heading as="h2" size="xl" mb={4}>Conheça nossos especialistas</Heading>
              <Text color={textColor}>
                Nossa equipe é formada por profissionais experientes e dedicados, prontos para oferecer as melhores soluções para suas necessidades.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {teamMembers.map((member, index) => (
                <Box 
                  key={index} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  overflow="hidden"
                  borderWidth="1px"
                  borderColor={borderColor}
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'lg',
                    transition: 'all 0.3s',
                  }}
                >
                  <Box h="250px" overflow="hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </Box>
                  <Box p={6} textAlign="center">
                    <Heading as="h3" size="md" mb={1}>{member.name}</Heading>
                    <Text color="blue.500" fontWeight="medium" mb={2}>{member.role}</Text>
                    <Text color={textColor} fontSize="sm">Experiência: {member.experience}</Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bgGradient="linear(to-r, blue.500, teal.500)" py={16} px={4} color="white" w="100vw" mx="calc(50% - 50vw)">
        <Container maxW="container.lg" textAlign="center">
          <VStack spacing={6} maxW="3xl" mx="auto">
            <Heading as="h2" size="xl">Pronto para melhorar sua experiência tecnológica?</Heading>
            <Text fontSize="lg">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a resolver seus problemas de tecnologia.
            </Text>
            <Button 
              as={RouterLink} 
              to="/contato" 
              variant="cta" 
              size="lg"
            >
              Fale Conosco
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
