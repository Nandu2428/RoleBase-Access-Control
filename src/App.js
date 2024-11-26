import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import UserLogin from './components/UserLogin';
import Create from './components/Create';
import Details from './components/Details';
import Err from './components/Err';
import EditProfile from './components/EditProfile';
import ProtectedRoutes from './utils/ProtectedRoutes';
import { AuthProvide } from './utils/Auth';



function App() {
  return (
    <div className="App">
      <AuthProvide>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/err" element={<Err />}></Route>

            <Route
              path="/userLogin/:userName"
              element={
                <ProtectedRoutes>
                  <UserLogin />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/adminDashboard"
              element={
                <ProtectedRoutes>
                  <AdminDashboard />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/create"
              element={
                <ProtectedRoutes>
                  <Create />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/details/:id"
              element={
                <ProtectedRoutes>
                  <Details />
                </ProtectedRoutes>
              }
            ></Route>
            <Route path="/edit/:userName" element={<EditProfile />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvide>
    </div>
  );
}

export default App;
