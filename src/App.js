import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IdePage from './pages/IdePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/ide" element={<IdePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
