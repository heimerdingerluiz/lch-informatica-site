import { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, FormControl, FormLabel, Input, Textarea, Button, useToast, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppLink } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo seu contato. Retornaremos em breve!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box py={20} px={4}>
      <Container maxW="container.lg">
        <VStack spacing={12}>
          {/* Header */}
          <VStack textAlign="center" spacing={4} maxW="3xl" mx="auto">
            <Text color="blue.500" fontWeight="bold" letterSpacing="wide">CONTATO</Text>
            <Heading as="h1" size="2xl">Entre em Contato Conosco</Heading>
            <Text fontSize="lg" color={textColor}>
              Tem alguma dúvida ou precisa de um orçamento? Preencha o formulário abaixo ou entre em contato pelos nossos canais.
            </Text>
          </VStack>

          <Flex direction={{ base: 'column', lg: 'row' }} w="full" gap={8}>
            {/* Contact Form */}
            <Box flex={1} as="form" onSubmit={handleSubmit}>
              <Box 
                bg={cardBg} 
                borderWidth="1px" 
                borderColor={cardBorder} 
                borderRadius="lg" 
                p={8}
                boxShadow="sm"
              >
                <VStack spacing={6}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Seu Nome</FormLabel>
                    <Input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Digite seu nome completo"
                    />
                  </FormControl>

                  <HStack spacing={4} w="full">
                    <FormControl id="email" isRequired>
                      <FormLabel>E-mail</FormLabel>
                      <Input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                      />
                    </FormControl>

                    <FormControl id="phone">
                      <FormLabel>Telefone</FormLabel>
                      <Input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                      />
                    </FormControl>
                  </HStack>

                  <FormControl id="subject" isRequired>
                    <FormLabel>Assunto</FormLabel>
                    <Input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sobre o que você precisa?"
                    />
                  </FormControl>

                  <FormControl id="message" isRequired>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva sua necessidade com detalhes..."
                      rows={6}
                    />
                  </FormControl>

                  <Button 
                    type="submit" 
                    colorScheme="blue" 
                    size="lg" 
                    w="full"
                    leftIcon={<FaPaperPlane />}
                    isLoading={isSubmitting}
                    loadingText="Enviando..."
                  >
                    Enviar Mensagem
                  </Button>
                </VStack>
              </Box>
            </Box>

            {/* Contact Information */}
            <Box w={{ base: '100%', lg: '400px' }}>
              <VStack spacing={6} align="stretch">
                <Box 
                  bg={cardBg} 
                  borderWidth="1px" 
                  borderColor={cardBorder} 
                  borderRadius="lg" 
                  p={6}
                  boxShadow="sm"
                >
                  <VStack align="flex-start" spacing={6}>
                    <Box>
                      <Text fontWeight="bold" fontSize="lg" mb={4}>Informações de Contato</Text>
                      <Text color={textColor}>
                        Estamos prontos para atender suas necessidades de manutenção de computadores e instalação de câmeras de segurança.
                      </Text>
                    </Box>

                    <VStack spacing={4} align="flex-start" w="full">
                      <HStack spacing={4}>
                        <Icon as={FaMapMarkerAlt} color="blue.500" boxSize={5} />
                        <Box>
                          <Text fontWeight="medium">Endereço</Text>
                          <Text color={textColor} fontSize="sm">Rua Beira Rio, 1247 - Bairro Belo Horizonte</Text>
                          <Text color={textColor} fontSize="sm">Itaipulândia - PR, CEP 85880-000</Text>
                        </Box>
                      </HStack>

                      <HStack spacing={4}>
                        <Icon as={FaPhone} color="blue.500" boxSize={5} />
                        <Box>
                          <Text fontWeight="medium">Telefone</Text>
                          <Text color={textColor} fontSize="sm">(45) 99960-9853 (WhatsApp)</Text>
                          <Button 
                            mt={2}
                            size="sm" 
                            leftIcon={<FaWhatsapp />} 
                            colorScheme="whatsapp"
                            onClick={() => window.open(buildWhatsAppLink('Olá! Gostaria de falar com a equipe da LCH Informática.'), '_blank')}
                          >
                            Conversar no WhatsApp
                          </Button>
                        </Box>
                      </HStack>

                      <HStack spacing={4}>
                        <Icon as={FaEnvelope} color="blue.500" boxSize={5} />
                        <Box>
                          <Text fontWeight="medium">E-mail</Text>
                          <Text color={textColor} fontSize="sm">luyz.centronovo@hotmail.com</Text>
                        </Box>
                      </HStack>

                      <HStack spacing={4}>
                        <Icon as={FaClock} color="blue.500" boxSize={5} />
                        <Box>
                          <Text fontWeight="medium">Horário de Atendimento</Text>
                          <Text color={textColor} fontSize="sm">Segunda a Sexta: 08:00 - 18:00</Text>
                          <Text color={textColor} fontSize="sm">Sábado: 09:00 - 12:00</Text>
                        </Box>
                      </HStack>
                    </VStack>
                  </VStack>
                </Box>

                {/* Map Placeholder */}
                <Box 
                  bg="gray.100" 
                  h="250px" 
                  borderRadius="lg" 
                  overflow="hidden"
                  borderWidth="1px"
                  borderColor={cardBorder}
                >
                  <iframe 
                    src="https://www.google.com/maps?q=Rua%20Beira%20Rio%2C%201247%20-%20Bairro%20Belo%20Horizzonte%2C%20Itaipul%C3%A2ndia%20-%20PR&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Localização no Mapa"
                  ></iframe>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
