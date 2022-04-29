import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import User from './pages/userProfile/User';
import Login from './pages/login/Login';
import Forgot from './pages/forget/Forget';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forgot />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
