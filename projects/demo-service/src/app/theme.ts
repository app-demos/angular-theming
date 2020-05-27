export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#333333',
    '--background-default': '#FFFFFF',
    '--primary-default': '#6200EE',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground-default': '#CCCCCC',
    '--background-default': '#272727',
    '--primary-default': '#FFFFFF',
  },
};
