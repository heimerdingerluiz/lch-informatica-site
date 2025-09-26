import { useMemo, useState } from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Select, Input, useColorModeValue, Badge, Button } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { products as baseProducts } from '../data/products';
import { Link as RouterLink } from 'react-router-dom';

export default function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('todos');

  const categories = useMemo(() => {
    const set = new Set(baseProducts.map(p => p.category).filter(Boolean));
    return ['todos', ...Array.from(set)];
  }, []);

  const products = useMemo(() => {
    return baseProducts.filter(p => {
      const matchQuery = query
        ? [p.name, p.description, p.category].filter(Boolean).join(' ').toLowerCase().includes(query.toLowerCase())
        : true;
      const matchCategory = category === 'todos' ? true : p.category === category;
      return matchQuery && matchCategory;
    });
  }, [query, category]);

  return (
    <Box>
      {/* Hero full-bleed */}
      <Box
        bgGradient="linear(to-r, blue.500, teal.500)"
        color="white"
        py={24}
        px={4}
        textAlign="center"
        w="100vw"
        mx="calc(50% - 50vw)"
      >
        <Container maxW="container.lg">
          <VStack spacing={4}>
            <Text fontWeight="bold" letterSpacing="wide">CATÁLOGO</Text>
            <Heading as="h1" size="2xl">Produtos e Serviços</Heading>
            <Text fontSize="lg" maxW="2xl">
              Peça diretamente pelo WhatsApp. Rápido e simples!
            </Text>
            <HStack spacing={3} pt={2}>
              <Button as={RouterLink} to="/contato" variant="cta" size="md">
                Solicitar Orçamento
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Conteúdo */}
      <Box py={20} px={4}>
      <Container maxW="container.lg">
        <VStack spacing={10} align="stretch">
          {/* Filtros */}

          <HStack spacing={4} flexWrap="wrap">
            <Box minW={{ base: '100%', md: '300px' }}>
              <Input
                placeholder="Buscar por nome, descrição..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Box>
            <Box minW={{ base: '100%', md: '220px' }}>
              <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Select>
            </Box>
            <Badge colorScheme="blue" ml="auto">{products.length} itens</Badge>
          </HStack>

          {/* Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
    </Box>
  );
}
