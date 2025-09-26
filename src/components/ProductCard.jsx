import { Box, Image, Heading, Text, VStack, HStack, Button, useColorModeValue, Badge } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppLink } from '../config';
import { formatCurrency } from '../data/products';

export default function ProductCard({ product }) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const handleWhatsApp = () => {
    const message = [
      'Olá! Gostaria de falar com a equipe da LCH Informática.',
      `Tenho interesse no produto: ${product.name}.`,
      `ID: ${product.id}`,
      product.price ? `Preço informado: ${formatCurrency(product.price)}` : `Preço: sob consulta`,
      'Poderiam informar disponibilidade, formas de pagamento e prazo de instalação/entrega?'
    ].join('\n');
    const url = buildWhatsAppLink(message);
    window.open(url, '_blank');
  };

  return (
    <Box
      borderWidth="1px"
      borderColor={cardBorder}
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)', transition: 'all 0.2s' }}
    >
      <Box h="180px" bg={useColorModeValue('gray.100', 'gray.900')} overflow="hidden">
        <Image src={product.image} alt={product.name} objectFit="cover" w="100%" h="100%" loading="lazy" />
      </Box>
      <VStack align="stretch" spacing={3} p={4}>
        <HStack justify="space-between" align="center">
          <Heading as="h3" size="md" noOfLines={1}>{product.name}</Heading>
          {product.category && (
            <Badge colorScheme="blue" variant="subtle">{product.category}</Badge>
          )}
        </HStack>
        <Text color={textColor} noOfLines={2}>{product.description}</Text>
        <HStack justify="space-between" align="center" pt={2}>
          <Text fontWeight="bold" fontSize="lg">{formatCurrency(product.price)}</Text>
          <Button leftIcon={<FaWhatsapp />} colorScheme="whatsapp" onClick={handleWhatsApp} size="sm">
            Pedir no WhatsApp
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
