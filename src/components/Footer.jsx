import { Box, Container, Grid, GridItem, Text, Link, VStack, HStack, Divider, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTools, FaLaptop } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../config';

const Footer = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const hoverColor = 'blue.500';
  const iconColor = 'blue.500';

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Início', path: '/' },
    { title: 'Produtos', path: '/produtos' },
    { title: 'Serviços', path: '/servicos' },
    { title: 'Sobre Nós', path: '/sobre' },
    { title: 'Contato', path: '/contato' },
  ];

  const services = [
    { title: 'Manutenção de Computadores', path: '/servicos#manutencao' },
    { title: 'Câmeras de Segurança', path: '/servicos#cameras' },
    { title: 'Segurança Digital', path: '/servicos#seguranca' },
    { title: 'Redes e Conectividade', path: '/servicos#redes' },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Rua Beira Rio, 1247 - Bairro Belo Horizonte, Itaipulândia - PR, CEP 85880-000' },
    { icon: FaPhone, text: '(45) 99960-9853 (WhatsApp)', href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { icon: FaEnvelope, text: 'luyz.centronovo@hotmail.com', href: 'mailto:luyz.centronovo@hotmail.com' },
    { icon: FaClock, text: 'Segunda a Sexta: 08:00 - 18:00' },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com/suaempresa', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://instagram.com/suaempresa', label: 'Instagram' },
    { icon: FaWhatsapp, url: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp' },
  ];

  return (
    <Box as="footer" bg={bgColor} color={textColor} pt={16} pb={8}>
      <Container maxW="container.xl">
        <Grid 
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} 
          gap={8} 
          mb={12}
        >
          {/* Company Info */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Box>
                <HStack spacing={2} mb={4}>
                  <Icon as={FaLaptop} color={iconColor} boxSize={6} />
                  <Text fontSize="xl" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>LCH Informática</Text>
                </HStack>
                <Text mb={4}>
                  Especialistas em manutenção de computadores e instalação de câmeras de segurança. Atendimento rápido e especializado.
                </Text>
                <HStack spacing={4}>
                  {socialLinks.map((social, index) => (
                    <Link 
                      key={index} 
                      href={social.url} 
                      isExternal 
                      aria-label={social.label}
                      _hover={{ color: hoverColor }}
                      color={textColor}
                    >
                      <Icon as={social.icon} boxSize={5} />
                    </Link>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('gray.800', 'white')} mb={2}>Links Rápidos</Text>
              <VStack align="flex-start" spacing={3}>
                {footerLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    as={RouterLink} 
                    to={link.path}
                    _hover={{ color: hoverColor, textDecoration: 'none' }}
                    color={textColor}
                  >
                    {link.title}
                  </Link>
                ))}
              </VStack>
            </VStack>
          </GridItem>

          {/* Services */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('gray.800', 'white')} mb={2}>Nossos Serviços</Text>
              <VStack align="flex-start" spacing={3}>
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    as={RouterLink} 
                    to={service.path}
                    _hover={{ color: hoverColor, textDecoration: 'none' }}
                    color={textColor}
                  >
                    {service.title}
                  </Link>
                ))}
              </VStack>
            </VStack>
          </GridItem>

          {/* Contact Info */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('gray.800', 'white')} mb={2}>Entre em Contato</Text>
              <VStack align="flex-start" spacing={4}>
                {contactInfo.map((info, index) => (
                  <HStack key={index} align="flex-start" spacing={3}>
                    <Box mt={1}>
                      <Icon as={info.icon} color={iconColor} boxSize={5} />
                    </Box>
                    {info.href ? (
                      <Link href={info.href} isExternal color={textColor} _hover={{ color: hoverColor }}>
                        {info.text}
                      </Link>
                    ) : (
                      <Text>{info.text}</Text>
                    )}
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        <Divider borderColor={borderColor} my={8} />

        {/* Copyright */}
        <Grid 
          templateColumns={{ base: '1fr', md: '1fr 1fr' }} 
          gap={4} 
          alignItems="center"
        >
          <Text textAlign={{ base: 'center', md: 'left' }}>
            &copy; {currentYear} LCH Informática. Todos os direitos reservados.
          </Text>
          <Text textAlign={{ base: 'center', md: 'right' }}>
            Desenvolvido por LCH Informática
          </Text>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
