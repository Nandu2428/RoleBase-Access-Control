import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import EditProfile from './components/EditProfile';
import UserLogin from './components/UserLogin';
import Create from './components/Create';
import Details from './components/Details';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/userLogin" element={<UserLogin />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/editProfile" element={<EditProfile />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
