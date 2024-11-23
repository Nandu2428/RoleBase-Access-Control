import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AdminDashboard = () => {
    const [user, setUser] = useState(null);
    const usenavigate = useNavigate();


    const loadDetails = (id) => {
        usenavigate("/details/"+id);
    }


    const userList = async() => {
        const userData = await fetch("http://localhost:8000/user");
        const users = await userData.json();
        //console.log(users);
        setUser(users);
    }
    useEffect(() => {
        userList();
    }, []);



    const deleteHandle = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/user/" + id, {
                method:"DELETE"
            }).then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }


    return (
      <div>
        <div className="flex">
          <div className="ml-3 w-1/5 h-20 border-b-2 border-l-2 border-r-2 shadow-sm">
            <h1 className="text-violet-600 font-bold p-6 text-xl">
              Admin Dashboard
            </h1>
          </div>
          <div className="w-4/5 h-20 mx-4  border-b-2 border-l-2 border-r-2 flex justify-between">
            <div className="m-4">
              <input
                className="p-3 border-2 shadow-lg text-black"
                type="text"
                placeholder="Search"
              ></input>
            </div>
            <div className="m-6">
              <Link to="/login" className="font-bold text-md m-6">
                LogOut
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <p className="m-5 font-semibold text-xl w-1/5">List Of Users</p>
            <Link className="my-5 mx-64 text-md font-semibold" to="/create">
              Add New User(+)
            </Link>
          </div>
          <div>
            <table className=" m-5 border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-20 py-3 text-left text-sm font-medium text-gray-700">
                    UserName
                  </th>
                  <th className="border border-gray-200 px-20 py-3 text-left text-sm font-medium text-gray-700">
                    Email
                  </th>
                  <th className="border border-gray-200 px-20 py-3 text-left text-sm font-medium text-gray-700">
                    Phone Number
                  </th>
                  <th className="border border-gray-200 px-20 py-3 text-left text-sm font-medium text-gray-700">
                    Role
                  </th>
                  <th className="border border-gray-200 px-20 py-3 text-left text-sm font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {user &&
                  user.map((u) => (
                    <tr key={u.id}>
                      <td className="border border-gray-200 px-6 py-3 text-sm text-gray-600">
                        <b>{u.id}</b>
                      </td>
                      <td className="border border-gray-200 px-6 py-3 text-sm text-gray-600">
                        {u.email}
                      </td>
                      <td className="border border-gray-200 px-6 py-3 text-sm text-gray-600">
                        {u.phnnum}
                      </td>
                      <td className="border border-gray-200 px-6 py-3 text-sm text-gray-600">
                        {u.role}
                      </td>
                      <td className="border border-gray-200 px-6 text-sm text-gray-600">
                        <button
                          className="border-2 mr-2 p-1 rounded-md bg-red-600 text-white"
                          onClick={() => deleteHandle(u.id)}
                        >
                          Remove
                        </button>
                        <a
                          className="border-2 mr-2 px-3 py-1 rounded-md bg-blue-700 text-white cursor-pointer"
                          onClick={()=>{loadDetails(u.id)}}
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
export default AdminDashboard;