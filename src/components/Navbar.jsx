import { Box, Flex, Button, useColorModeValue, Heading, HStack, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, VStack, Divider, Icon } from '@chakra-ui/react';
import { FaTools, FaVideo, FaHome, FaInfoCircle, FaEnvelope, FaShoppingCart, FaPhone, FaBars, FaTimes, FaLaptop } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { to: '/', label: 'Início', icon: FaHome },
    { to: '/produtos', label: 'Produtos', icon: FaShoppingCart },
    { to: '/servicos', label: 'Serviços', icon: FaTools },
    { to: '/sobre', label: 'Sobre Nós', icon: FaInfoCircle },
    { to: '/contato', label: 'Contato', icon: FaEnvelope },
  ];

  return (
    <Box bg={bg} px={4} boxShadow="sm" position="fixed" w="100%" zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <HStack spacing={3} alignItems="center">
          <Icon as={FaLaptop} boxSize="24px" color={useColorModeValue('blue.500', 'blue.300')} />
          <Heading size="md" color={textColor}>LCH Informática</Heading>
        </HStack>
        
        <HStack as="nav" spacing={2} display={{ base: 'none', md: 'flex' }}>
          {links.map((l) => (
            <Button
              key={l.to}
              as={RouterLink}
              to={l.to}
              leftIcon={<l.icon />}
              variant="ghost"
              color={textColor}
              _hover={{ bg: 'transparent', color: 'blue.500' }}
            >
              {l.label}
            </Button>
          ))}
        </HStack>

        <HStack spacing={2}>
          <Button leftIcon={<FaPhone />} size="sm" variant="primary">
            (45) 99960-9853
          </Button>
          {/* Botão hambúrguer (mobile) */}
          <IconButton
            aria-label="Abrir menu"
            icon={isOpen ? <FaTimes /> : <FaBars />}
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
        </HStack>
      </Flex>

      {/* Drawer Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerBody p={4}>
            <VStack align="stretch" spacing={2} mt={4}>
              {links.map((l) => (
                <Button
                  key={l.to}
                  as={RouterLink}
                  to={l.to}
                  leftIcon={<l.icon />}
                  variant="ghost"
                  justifyContent="flex-start"
                  color={textColor}
                  _hover={{ bg: 'transparent', color: 'blue.500' }}
                  onClick={onClose}
                >
                  {l.label}
                </Button>
              ))}
              <Divider my={2} />
              <Button leftIcon={<FaPhone />} onClick={onClose} variant="primary">
                (45) 99960-9853
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
