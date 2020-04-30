import React, { useContext } from 'react';

export type Theme = {
  mode: 'light' | 'dark';
  colors: {
    primaryLight: string;
    primary: string;
    primaryDark: string;
    complementLight: string;
    complement: string;
    complementDark: string;
    analogLight: string;
    analog: string;
    analogDark: string;
    highlight: string;
    disabled: string;
    warning: string;
    background: string;
    backgroundAlt: string;
    textPrimaryLight: string;
    textPrimary: string;
    textComplementLight: string;
    textComplement: string;
    textAnalogLight: string;
    textAnalog: string;
    textHighlight: string;
    textDisabled: string;
    textWarning: string;
    textBackground: string;
    textBackgroundAlt: string;
  };
};
export const LightTheme: Theme = {
  mode: 'light',
  colors: {
    primaryLight: '#C19594',
    primary: '#A56363',
    primaryDark: '#744344',
    complementLight: '#A395C1',
    complement: '#7A64A5',
    complementDark: '#534373',
    analogLight: '#96A4C1',
    analog: '#6479A5',
    analogDark: '#435474',
    highlight: '#64A565',
    disabled: '#808080',
    warning: '#CC3F34',
    background: '#E5E5E5',
    backgroundAlt: '#B8B8B8',
    textPrimaryLight: '#FFFFFF',
    textPrimary: '#000000',
    textComplementLight: '#FFFFFF',
    textComplement: '#000000',
    textAnalogLight: '#FFFFFF',
    textAnalog: '#000000',
    textHighlight: '#FFFFFF',
    textDisabled: '#FFFFFF',
    textWarning: '#FFFFFF',
    textBackground: '#000000',
    textBackgroundAlt: '#7A64A5',
  },
};
export const DarkTheme: Theme = {
  mode: 'dark',
  colors: {
    primaryLight: '#A56363',
    primary: '#744344',
    primaryDark: '#473233',
    complementLight: '#7A64A5',
    complement: '#534373',
    complementDark: '#393247',
    analogLight: '#6479A5',
    analog: '#435474',
    analogDark: '#333A46',
    highlight: '#447343',
    disabled: '#666666',
    warning: '#A43328',
    background: '#4D4D4D',
    backgroundAlt: '#2A2A2A',
    textPrimaryLight: '#FFFFFF',
    textPrimary: '#FFFFFF',
    textComplementLight: '#FFFFFF',
    textComplement: '#FFFFFF',
    textAnalogLight: '#FFFFFF',
    textAnalog: '#FFFFFF',
    textHighlight: '#FFFFFF',
    textDisabled: '#BBBBBB',
    textWarning: '#FFFFFF',
    textBackground: '#FFFFFF',
    textBackgroundAlt: '#A395C1',
  },
};

const ThemeContext = React.createContext<Theme>(LightTheme);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export const useMode = () => {
  const { mode } = useContext(ThemeContext);

  return mode;
};

export const useColor = () => {
  const { colors } = useContext(ThemeContext);

  return colors;
};
