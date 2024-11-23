import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const [user, setUser]=useState("");

    const userList = async () => {
      const userDatails = await fetch("http://localhost:8000/user/"+id);
      const userData = await userDatails.json();
      console.log(userData);
      setUser(userData);
    };
    useEffect(() => {
      userList();
    }, [userList]);


    return (
        <div>
        <div className="flex items-center justify-center my-28">
            <div className="bg-white p-8 rounded-lg shadow-md text-left">
            <h1 className="text-2xl font-bold mb-4 text-gray-700">Details Of an User</h1>
            <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
            <p className="text-gray-600"><strong>Phone Number:</strong> {user.phnnum}</p>
        </div>
     </div>
        </div>
    )
};
export default Details;