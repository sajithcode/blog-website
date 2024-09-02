import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BlogPage from './components/BlogPage';
import CreatePost from './components/CreatePost';
import GetPost from './components/GetPost';
import UpdatePost from './components/UpdatePost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogPage" element={<BlogPage/>} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path='/getPost' element={<GetPost />} />
          <Route path='/updatePost/:id' element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
