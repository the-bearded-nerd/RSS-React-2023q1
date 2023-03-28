import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/header/header';
import MainPage from './pages/main/mainPage';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';
import Form from './pages/formPage/formPage';

export default function App() {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1);
    setTitle(path || 'main');
  }, [location]);

  return (
    <div className="app-container">
      <Header title={title} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
