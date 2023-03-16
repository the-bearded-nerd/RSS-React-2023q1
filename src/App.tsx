import { Routes, Route, Link } from 'react-router-dom';

import MainPage from './pages/main/main';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';

function App() {
  return (
    <div>
      <h1>RSS React Week1</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
