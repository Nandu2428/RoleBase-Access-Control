import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
        const adminCheck = await fetch("http://localhost:8000/admin?id=" + userName);
        const adminData = await adminCheck.json();
        if (adminData.length>0) {
          if (adminData[0].password === password) {
            sessionStorage.setItem("userName", adminData[0].id);
            sessionStorage.setItem("userrole", "admin");
            usenavigate("/adminDashboard");
          }
          else {
            alert("Password is incorrect");
          }
        }
        else {
          const userCheck = await fetch("http://localhost:8000/user?id=" + userName);
          const userData = await userCheck.json();
          if (userData.length > 0) {
            
             if (userData[0].password === password) {
               sessionStorage.setItem("userName", userData[0].id);
               sessionStorage.setItem("userrole", "user");
               usenavigate("/userLogin");
             }
          }
          else {
            alert("Wrong Credentials");
          }
      }
      




    }
    };

  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      alert("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please Enter Password");
    }
    return result;
  };
  return (
   <div className="p-4 max-w-md mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Login</h1>
      <form onSubmit={ProceedLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">UserName</label>
          <input
            type="text"
            name="email"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder="Enter your UserName"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Login
          </button>

          <Link className="ml-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition" to="/register">New User</Link>
          </div>
      </form>
      </div>
  );
};

export default Login;