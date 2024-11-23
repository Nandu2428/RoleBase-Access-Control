import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({
    id: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    if (!username) {
      // Redirect to login if not logged in
      navigate("/login");
      return;
    }

    // Fetch the current user's details from JSON server
    fetch(`http://localhost:8000/user?id=${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setUserDetails(data[0]);
        } else {
          alert("User not found!");
        }
      })
      .catch((err) => console.error("Error fetching user details:", err));
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Update the user details on JSON server
    fetch(`http://localhost:8000/user/${userDetails.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    })
      .then((res) => {
        if (res.ok) {
          alert("Profile updated successfully!");
          navigate("/user-dashboard");
        } else {
          alert("Failed to update profile!");
        }
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              name="id"
              value={userDetails.id}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
        <button
          onClick={() => navigate("/user-dashboard")}
          className="w-full mt-3 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
