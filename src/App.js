import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <BrowserRouter basename="/AiccReactTeamplate">
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          {/* path: URL경로 정의, element: 렌더링될 컴포넌트 정의  */}
          {/* path의 이름 정의 가능 */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Default route to Home component */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Catch all unmatched routes and redirect to Home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
        <ScrollToTop
          smooth
          width="20px"
          height="20px"
          color="white"
          style={{
            backgroundColor: 'indigo',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
