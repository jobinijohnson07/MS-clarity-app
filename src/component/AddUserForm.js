import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && gender && jobTitle && image) {
      addUser({ name, gender, jobTitle, image });
      setName('');
      setGender('');
      setJobTitle('');
      setImage('');
    }
  };

  return (
    <form className="mb-4 p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          className="border border-gray-400 p-2 w-full rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          className="border border-gray-400 p-2 w-full rounded"
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          className="border border-gray-400 p-2 w-full rounded"
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          className="border border-gray-400 p-2 w-full rounded"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
