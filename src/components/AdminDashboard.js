import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useAuth } from "../utils/Auth";


const AdminDashboard = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const { logout } = useAuth();

  const [user, setUser] = useState(null);
  const usenavigate = useNavigate();

  const loadDetails = (id) => {
    usenavigate("/details/" + id);
  };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const userData = await fetch(`${apiUrl}/user`);
        const users = await userData.json();
        setUser(users);
      } catch (err) {
        alert("Please Try Again");
      }
    };

    fetchUserList();
  }, [apiUrl]); 



  const deleteHandle = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`${apiUrl}/user/`+ id, {
        method: "DELETE",
      })
        .then((res) => {
          setUser((prevUsers) => prevUsers.filter((u) => u.id !== id));
        })
        .catch((err) => {
          alert("Please Try Again");
        });
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="ml-3 md:w-1/5 w-full h-20 border-b-2 border-l-2 border-r-2 shadow-sm flex items-center">
          <h1 className="text-violet-800 font-bold px-6 text-xl text-center md:text-left">
            Admin Dashboard
          </h1>
        </div>
        <div className="md:w-4/5 w-full h-20 mx-4 border-b-2 border-l-2 border-r-2 flex items-center justify-between">
          <div className="flex-grow mx-4">
            <SearchBar />
          </div>
          <div className="mr-6">
            <button
              onClick={logout}
              className="font-semibold text-md text-white bg-violet-800 hover:bg-violet-900  py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap justify-center items-center">
          <p className="m-5 font-bold text-xl md:text-2xl">List Of Users</p>
        </div>
        <Link
          className="ml-11 border-2 rounded-md p-3 text-white bg-green-600 hover:bg-green-700"
          to="/create"
          state={{ fromAdmin: true }}
        >
          Add New User(+)
        </Link>
        <div className="overflow-x-auto">
          <table className="m-5 border-collapse border border-gray-200 bg-white shadow-md rounded-lg w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-6 md:px-14 py-3 text-xs md:text-sm font-medium text-gray-700">
                  UserName
                </th>
                <th className="border border-gray-200 px-6 md:px-20 py-3 text-xs md:text-sm font-medium text-gray-700">
                  Email
                </th>
                <th className="border border-gray-200 px-6 md:px-12 py-3 text-xs md:text-sm font-medium text-gray-700">
                  Phone Number
                </th>
                <th className="border border-gray-200 px-6 md:px-9 py-3 text-xs md:text-sm font-medium text-gray-700">
                  Role
                </th>
                <th className="border border-gray-200 px-6 md:px-16 py-3 text-xs md:text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user &&
                user.map((u) => (
                  <tr key={u.id}>
                    <td className="border border-gray-200 px-4 md:px-6 py-3 text-xs md:text-sm text-gray-600">
                      <b>{u.id}</b>
                    </td>
                    <td className="border border-gray-200 px-4 md:px-6 py-3 text-xs md:text-sm text-gray-600">
                      {u.email}
                    </td>
                    <td className="border border-gray-200 px-4 md:px-6 py-3 text-xs md:text-sm text-gray-600">
                      {u.phnnum}
                    </td>
                    <td className="border border-gray-200 px-4 md:px-6 py-3 text-xs md:text-sm text-gray-600">
                      {u.role}
                    </td>
                    <td className="border border-gray-200 px-4 md:px-6 text-xs md:text-sm text-gray-600">
                      <button
                        className="border-2 mr-2 mb-2 md:mb-0 p-1 md:p-2 rounded-md bg-red-600 text-white"
                        onClick={() => deleteHandle(u.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="border-2 px-2 md:px-3 py-1 md:py-2 rounded-md bg-blue-700 text-white cursor-pointer"
                        onClick={() => loadDetails(u.id)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
