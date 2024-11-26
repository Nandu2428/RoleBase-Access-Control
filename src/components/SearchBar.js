import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
    const searchText = useRef(null);
  const Navigate = useNavigate();

        const searchUsers = async (user) => {
          const response = await fetch(
            `${apiUrl}/user/${user}`
          );
          if (!response.ok) {
            Navigate("/err");
          }
          const json = await response.json();
        
          if (json != null && json.id!=null) {
            Navigate("/details/" + user);
          }
          else {
            alert("enter valid username");
          }
        };


    const handleClick =()=> {
        const user = searchText.current.value;
        searchUsers(user);
    }
    


    return (
      <>
        <form className="m-4" onSubmit={(e)=>e.preventDefault()}>
          <input
            className="p-3 border-2 shadow-lg text-black border-gray-300"
            ref={searchText}
            type="text"
            placeholder="Search for an User"
          ></input>
          <button className="bg-violet-800 hover:bg-violet-900 text-white font-semibold ml-2 p-2 rounded-md" onClick={handleClick}>Search</button>
        </form>
      </>
    );
}
export default SearchBar;