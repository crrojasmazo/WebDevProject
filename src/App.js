import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/HomePage';
import LogInPage from './Pages/LogInPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  );
}

export default App;
