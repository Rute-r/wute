import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
