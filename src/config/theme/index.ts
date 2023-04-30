import { extendTheme } from '@chakra-ui/react';
import tailwindConfig from '../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwind = resolveConfig(tailwindConfig) as any;

// Extend the theme to include custom colors, fonts, etc
const colors = {
  black: '#000',
  white: '#fff',
  primary: tailwind.theme?.colors?.primary,
  'primary-emphasis': tailwind.theme?.colors?.['primary-emphasis'],
  secondary: tailwind.theme?.colors?.secondary,
  success: tailwind.theme?.colors?.success,
  light: tailwind.theme?.colors?.light,
  'light-gray': tailwind.theme?.colors?.['light-gray']
};

const components = {
  Input: {
    variants: {
      outline: {
        field: {
          _focus: {
            borderColor: 'primary.500',
            boxShadow: 'none'
          }
        }
      }
    }
  },
  Checkbox: {
    baseStyle: {
      control: {
        _checked: {
          bg: 'primary.600',
          borderColor: 'primary.600'
        },
        _hover: {
          borderColor: 'primary.300'
        }
      }
    }
  }
};

export const theme = extendTheme({ colors, components });
