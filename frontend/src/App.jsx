import './App.css';
import Home from './component/Home';
import Projects from './component/Projects';
import Templates from './component/Templates';
import Index from "./pages/Index";
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="templates" element={<Templates />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
