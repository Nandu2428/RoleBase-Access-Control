import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { Link } from "react-router-dom";
import Back_img from "../Images/Back_img.jpg";
import { useAuth } from "../utils/Auth";



const Login = () => {
  const { login } = useAuth();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
        const adminCheck = await fetch(`${apiUrl}/admin?id=${userName}`);
        const adminData = await adminCheck.json();
      if (adminData.length > 0) {
        if (adminData[0].password === password) {
          localStorage.setItem("auth", JSON.stringify({ role: "admin", id: adminData[0].id }));
          login();
          usenavigate("/adminDashboard");
        }
        else {
          alert("Password is incorrect");
        }
      }
      else {
        const userCheck = await fetch(`${apiUrl}/user?id=${userName}`);
        const userData = await userCheck.json();
        
        if (userData.length > 0) {
          if (userData[0].password === password) {
            sessionStorage.setItem("userName", userData[0].id);
            sessionStorage.setItem("userrole", "user");
            login();
            usenavigate("/userLogin/" + userName);
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
    <div>
      <div className="absolute">
        <img
          src={Back_img}
          alt="background-image"
          className="h-screen object-cover md:w-screen backdrop-blur"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <form
        onSubmit={ProceedLogin}
        className="mx-64 my-44 absolute bg-black rounded-lg bg-opacity-75 md:w-4/12 px-12 pt-5 pb-8 my-36 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-3xl px-2 pb-6 text-white">Sign In</h1>
        <div>
          <label className="block text-sm font-medium mb-2 text-white">UserName</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your UserName"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mb-2"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
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

          <Link
            className="ml-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition"
            to="/register"
          >
            New User
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;