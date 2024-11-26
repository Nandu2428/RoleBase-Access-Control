import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Register_Backdrop from "../Images/Register_Backdrop.jpg";


const Register = () => {

    const apiUrl = process.env.REACT_APP_API_URL;

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phnnum, setPhnnum] = useState("");
    const [role, setRole] = useState("children");

    const usenavigate = useNavigate();
  const location = useLocation();

   
    const handleSubmit = (e) => {
        e.preventDefault();
         if (isValidate) {
           let x = { id,name,password, email,phnnum,role };
           fetch(`${apiUrl}/user`, {
             method: "POST",
             headers: { "content-type": "application/json" },
             body: JSON.stringify(x),
           })
             .then((res) => {
               alert("Registered Successfully");
               if (location.state?.fromAdmin) {
                 usenavigate("/adminDashboard"); // Navigate to Admin page
               } else {
                 usenavigate("/"); // Default to Login page
               }
             })
             .catch((err) => {
               alert("Failed");
             });
         }

    };



 const isValidate = () => {
    let isProceed = true;
     if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
     }
     else {
       isProceed = false;
       alert("Please enter the valid email");
     }
   return isProceed;
 };




    return (
      <div className="">
        <div className="absolute">
          <img
            src={Register_Backdrop}
            alt="background-image"
            className="h-screen object-cover md:w-screen backdrop-blur"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-64 my-5 absolute bg-black rounded-lg bg-opacity-75 md:w-4/12 px-12 pt-5 pb-8 my-36 mx-auto right-0 left-0"
        >
          <h1 className=" text-2xl font-bold mb-4 text-white">
            {location.state?.fromAdmin ? <h1>AddUser</h1> : <h1>Register</h1>}
          </h1>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              UserName
            </label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter userName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mt-2 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter userName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-2 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-2 mb-1">
              Password
            </label>
            <input
              type="password"
              name="phone"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-2 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              value={phnnum}
              onChange={(e) => setPhnnum(e.target.value)}
              placeholder="Enter your "
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-2 mb-1">
              Role
            </label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="Children">Children</option>
              <option value="Adult">Adult</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            {location.state?.fromAdmin ? <h1>Add</h1> : <h1>Register</h1>}
          </button>
        </form>
      </div>
    );
};
export default Register;