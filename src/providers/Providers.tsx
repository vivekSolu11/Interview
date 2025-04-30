"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { theme } from "../theme/theme";
import { store } from "../store/store";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useMemo } from 'react';

// Create a cache for MUI styles
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export function Providers({ children }: { children: React.ReactNode }) {
  const emotionCache = useMemo(() => createEmotionCache(), []);

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
} 