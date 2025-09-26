import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#e6f7ff',
    100: '#b3e0ff',
    200: '#80c8ff',
    300: '#4db0ff',
    400: '#1a98ff',
    500: '#0080ff',
    600: '#0066cc',
    700: '#004d99',
    800: '#003366',
    900: '#001a33',
  },
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      lineHeight: 'base',
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: 'bold',
      lineHeight: '1.2',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
    },
    'p, li': {
      color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
    },
    a: {
      color: 'blue.500',
      _hover: {
        textDecoration: 'none',
        color: 'blue.600',
      },
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'md',
      _focus: {
        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
      },
    },
    sizes: {
      lg: {
        fontSize: 'md',
        px: 6,
        py: 4,
      },
    },
    variants: {
      primary: {
        bg: 'blue.500',
        color: 'white',
        _hover: { bg: 'blue.600' },
        _active: { bg: 'blue.700' },
      },
      secondary: {
        border: '1px solid',
        borderColor: 'blue.500',
        color: 'blue.500',
        bg: 'transparent',
        _hover: { bg: 'blue.50' },
        _active: { bg: 'blue.100' },
      },
      cta: {
        border: '1px solid',
        borderColor: 'whiteAlpha.700',
        color: 'white',
        bg: 'transparent',
        _hover: { bg: 'whiteAlpha.200' },
        _active: { bg: 'whiteAlpha.300' },
      },
      solid: (props) => ({
        bg: `${props.colorScheme}.500`,
        color: 'white',
        _hover: {
          bg: `${props.colorScheme}.600`,
          _disabled: {
            bg: `${props.colorScheme}.500`,
          },
        },
        _active: {
          bg: `${props.colorScheme}.700`,
        },
      }),
      outline: (props) => ({
        border: '1px solid',
        borderColor: `${props.colorScheme}.500`,
        color: `${props.colorScheme}.500`,
        _hover: {
          bg: `${props.colorScheme}.50`,
        },
        _active: {
          bg: `${props.colorScheme}.100`,
        },
      }),
    },
    defaultProps: {
      colorScheme: 'blue',
    },
  },
  Input: {
    baseStyle: {
      field: {
        _focus: {
          borderColor: 'blue.500',
          boxShadow: '0 0 0 1px #3182ce',
        },
      },
    },
  },
  Textarea: {
    baseStyle: {
      _focus: {
        borderColor: 'blue.500',
        boxShadow: '0 0 0 1px #3182ce',
      },
    },
  },
  Select: {
    baseStyle: {
      field: {
        _focus: {
          borderColor: 'blue.500',
          boxShadow: '0 0 0 1px #3182ce',
        },
      },
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
});

export default theme;
