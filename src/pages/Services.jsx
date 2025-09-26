import { Box, Container, Heading, SimpleGrid, Text, VStack, useColorModeValue, List, ListItem, ListIcon, Button, Flex } from '@chakra-ui/react';
import { FaCheckCircle, FaTools, FaVideo, FaShieldAlt, FaLaptopHouse, FaServer, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import ServiceImageSlider from '../components/ServiceImageSlider';

const services = [
  {
    title: 'Manutenção de Computadores',
    icon: FaTools,
    description: 'Serviços completos para manter seu computador funcionando perfeitamente.',
    features: [
      'Formatação e instalação de sistemas operacionais',
      'Limpeza interna e troca de pasta térmica',
      'Substituição de peças e componentes',
      'Atualização de hardware',
      'Otimização de desempenho'
    ],
    price: 'Sob consulta'
  },
  {
    title: 'Câmeras de Segurança',
    icon: FaVideo,
    description: 'Soluções completas em monitoramento e segurança eletrônica.',
    features: [
      'Instalação de câmeras IP e analógicas',
      'Sistemas de CFTV completos',
      'Monitoramento remoto via celular',
      'Gravação em nuvem',
      'Manutenção preventiva e corretiva'
    ],
    price: 'Sob consulta'
  },
  {
    title: 'Segurança Digital',
    icon: FaShieldAlt,
    description: 'Proteja seus dados e navegue com segurança na internet.',
    features: [
      'Remoção de vírus e malwares',
      'Backup de dados importantes',
      'Configuração de firewall',
      'Proteção de rede Wi-Fi',
      'Recuperação de dados'
    ],
    price: 'Sob consulta'
  },
  {
    title: 'Redes e Conectividade',
    icon: FaNetworkWired,
    description: 'Soluções em redes cabeadas e sem fio para sua residência ou empresa.',
    features: [
      'Instalação de redes estruturadas',
      'Configuração de roteadores e switches',
      'Otimização de sinal Wi-Fi',
      'Cabeamento estruturado',
      'Solução de problemas de conexão'
    ],
    price: 'Sob consulta'
  },
  {
    title: 'Alarmes Residenciais',
    icon: FaShieldAlt,
    description: 'Instalação e manutenção de sistemas de alarme para proteção residencial.',
    features: [
      'Instalação de centrais e sensores (PIR, magnéticos)',
      'Integração com sirenes e discadoras',
      'Configuração de aplicativo para monitoramento',
      'Treinamento de uso e manutenção',
      'Atendimento técnico e suporte'
    ],
    price: 'Sob consulta'
  }
];

const Services = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const featureColor = useColorModeValue('gray.600', 'gray.300');
  const iconColor = useColorModeValue('blue.500', 'blue.400');

  return (
    <Box py={20} px={4}>
      <Container maxW="container.lg">
        <VStack spacing={12}>
          {/* Header */}
          <VStack textAlign="center" spacing={4} maxW="3xl" mx="auto">
            <Text color="blue.500" fontWeight="bold" letterSpacing="wide">NOSSOS SERVIÇOS</Text>
            <Heading as="h1" size="2xl">Soluções Completas para Você</Heading>
            <Text fontSize="lg" color={featureColor}>
              Oferecemos uma ampla gama de serviços para atender todas as suas necessidades de tecnologia.
            </Text>
          </VStack>

          {/* Services Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {services.map((service, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg={cardBg}
                borderColor={cardBorder}
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'lg',
                  transition: 'all 0.3s',
                }}
              >
                <Box p={6}>
                  <Flex align="center" mb={4}>
                    <Box
                      p={3}
                      bg="blue.50"
                      color={iconColor}
                      borderRadius="lg"
                      mr={4}
                    >
                      <service.icon size={24} />
                    </Box>
                    <Box>
                      <Heading as="h3" size="lg">{service.title}</Heading>
                      <Text color={featureColor}>{service.description}</Text>
                    </Box>
                  </Flex>
                  
                  <List spacing={3} mb={6} mt={6}>
                    {service.features.map((feature, i) => (
                      <ListItem key={i} display="flex" alignItems="flex-start">
                        <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                        <Text color={featureColor}>{feature}</Text>
                      </ListItem>
                    ))}
                  </List>
                  
                  <Flex justify="flex-end" align="center" mt={8}>
                    <Button as={RouterLink} to="/contato" variant="primary" size="sm">
                      Solicitar Orçamento
                    </Button>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* Slider de Serviços Recentes */}
          <VStack spacing={6} w="full">
            <Heading as="h2" size="lg" textAlign="center">Serviços Recentes</Heading>
            <Box w="full" maxW="container.lg" mx="auto">
              <ServiceImageSlider
                height={{ base: '180px', md: '320px' }}
                fit="contain"
                bg="gray.100"
                backdrop
              />
            </Box>
          </VStack>

          {/* CTA Section */}
          <Box 
            bgGradient="linear(to-r, blue.500, teal.500)" 
            borderRadius="lg" 
            p={8} 
            w="100vw"
            mx="calc(50% - 50vw)"
            textAlign="center"
            color="white"
            mt={8}
          >
            <VStack spacing={4}>
              <Heading as="h3" size="lg">Não encontrou o que procurava?</Heading>
              <Text>Entre em contato e conte-nos sobre sua necessidade. Teremos prazer em ajudar!</Text>
              <Button 
                as={RouterLink} 
                to="/contato" 
                variant="cta" 
                mt={4}
              >
                Fale Conosco
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;
