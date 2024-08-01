import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          {/* path: URL경로 정의, element: 렌더링될 컴포넌트 정의  */}
          {/* path의 이름지정가능 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
