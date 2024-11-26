import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const Details = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams(); 
  const [user, setUser] = useState(null); 

    useEffect(() => {
     
      const userList = async () => {
        try {
          const userDetails = await fetch(`${apiUrl}/user/` + id);
          const userData = await userDetails.json();
          setUser(userData); 
        } catch (error) {
          alert("Please Try Again");
        }
      };

      if (id) {
        userList(); // Call the userList function to fetch data
      }
    }, [id,apiUrl]);
  
  

  // Loading and error handling UI
  if (!user) {
    return (
      <div className="flex items-center justify-center my-28">
        <div className="bg-white p-8 rounded-lg shadow-md text-left">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">Loading....</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center my-28">
        <div className="bg-white p-8 rounded-lg shadow-md text-left">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">
            Details Of an User
          </h1>
          <p className="text-gray-600">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600">
            <strong>Role:</strong> {user.role}
          </p>
          <p className="text-gray-600 mb-6">
            <strong>Phone Number:</strong> {user.phnnum}
          </p>
          <Link to="/adminDashboard" className="border-2 p-2 px-4 ml-16 bg-blue-700 text-white">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
