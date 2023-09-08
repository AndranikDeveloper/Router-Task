import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllPosts from './components/Posts/Posts';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<AllPosts />}/>
        <Route path='/posts/:id' element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
