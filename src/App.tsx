import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { GlobalStyles } from './global/GlobalStyles';
import { theme } from './global/theme';
import { Cart } from './pages/Cart';
import Movies from './pages/Movies';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main className="routes">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
