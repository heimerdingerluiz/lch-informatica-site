import { ChakraProvider, ColorModeScript, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import { useEffect } from 'react';

function App() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const appBg = useColorModeValue('gray.50', 'gray.900');

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <Router>
        <Flex direction="column" minH="100vh" bg={appBg}>
          <Navbar />
          <Box as="main" flex="1" pt={16}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>

  );
}

export default App;
