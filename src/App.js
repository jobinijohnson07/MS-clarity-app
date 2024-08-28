import React, { useState } from 'react';
import UserList from './component/UserList';
import AddUserForm from './component/AddUserForm';


function App() {
  // Default users array
  const [users, setUsers] = useState([
    {
      name: 'Alice Johnson',
      gender: 'Female',
      jobTitle: 'Software Engineer',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bob Smith',
      gender: 'Male',
      jobTitle: 'Product Manager',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Carla Brown',
      gender: 'Female',
      jobTitle: 'UX Designer',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false); // State for toggling form visibility

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
    <h1 className="text-2xl font-bold mb-4">User List</h1>
    <button
      onClick={toggleFormVisibility}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mb-4"
    >
      {isFormVisible ? 'Close User Form' : 'Open User Form'}
    </button>
    <div
      className={`transition-all duration-700 ease-in-out overflow-hidden ${
        isFormVisible ? 'max-h-screen' : 'max-h-0'
      }`}
    >
      {isFormVisible && <AddUserForm addUser={addUser} />}
    </div>
    <UserList users={users} />
  </div>
  );
}

export default App;
