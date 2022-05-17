import { defaultTheme } from '@src/themes';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const renderWith = (Component: JSX.Element) => {
  return render(
    <ThemeProvider theme={defaultTheme}>
      {Component}
    </ThemeProvider>
  );
};

export default renderWith;
