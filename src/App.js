import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import FriendDetail from './FriendDetail/FriendDetail';
import Friends from './Friends/Friends';
import Header from './Header/Header';
import Home from './Home/Home';
import Notfound from './Notfound/Notfound';
import Post from './Post/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/friends/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/posts' element={<Post></Post>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
