import { BrowserRouter } from 'react-router-dom';
import Layout from './components/template/Layout';
import AppRouter from './core/config/Routes';

function App() {
  return (
    <main className="d-flex flex-column">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </main>
  );
}

export default App;
