import logo from './logo.svg';
import './App.css';
import CreatePost from './components/CreatePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import ViewPosts from './components/ViewPosts';
import EditPost from './components/EditPost';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/viewPosts" element={<ViewPosts />} />
          <Route path="/editPost" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
