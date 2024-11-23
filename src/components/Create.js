import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

   const [id, setId] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [phnnum, setPhnnum] = useState("");
   const [role, setRole] = useState("children");
    const x = { id, email };
    const usenavigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(x),
        })
          .then((res) => {
              alert("Registered Successfully");
              usenavigate("/adminDashboard");
          })
          .catch((err) => {
            alert("Failed");
          });
    }


    return (
      <div>
        <div className="p-4 max-w-xl mx-auto m-8 border-gray border-2">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">
            Create New User
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
}
export default Create;