import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AddClients from './pages/AddClients';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
      </nav>
      <hr />
      <button onClick={() => navigate('/')}>
        Ir para Home
      </button>
      <button onClick={() => navigate('/AddClients')}>
        Adicionar Clientes
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddClients" element={<AddClients />} />
      </Routes>
    </div>
  );
}

export default App;
