import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MainPage } from './pages/MainPage';
const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
});

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
          <Routes>
            <Route path='/' element={<MainPage/>} />
          </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
