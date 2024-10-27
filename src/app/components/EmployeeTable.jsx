'use client'

import React, { useEffect, useState } from 'react';

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [expandedProfile, setExpandedProfile] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/employees/get');
      const result = await response.json();

      if (response.ok) {
        setEmployees(result.data);
      } else {
        console.error('Error fetching employees:', result.error);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (id) => {
    // Show message for admin signup required
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide after 3 seconds
  };

  const handleDelete = (id) => {
    // Show message for admin signup required
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide after 3 seconds
  };

  const toggleProfile = (id) => {
    setExpandedProfile(expandedProfile === id ? null : id);
  };

  return (
    <div className='relative overflow-x-auto'>
      {showMessage && (
        <div className='absolute top-0 right-0 mt-4 mr-4 bg-yellow-200 text-yellow-800 p-3 rounded-lg shadow-lg'>
          Admin signup required
        </div>
      )}
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 text-left align-top'>Profile</th>
            <th className='py-2 text-left align-top'>Name</th>
            <th className='py-2 text-left align-top'>ID</th>
            <th className='py-2 text-left align-top'>Contact</th>
            <th className='py-2 text-left align-top'>Department</th>
            <th className='py-2 text-left align-top'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <React.Fragment key={emp.id}>
              <tr className='border-b'>
                <td className='py-2'>
                  <img
                    src={emp.profilePic}
                    alt={`${emp.name}'s profile`}
                    className='w-12 h-12 rounded-full object-cover cursor-pointer'
                    onClick={() => toggleProfile(emp.id)}
                  />
                </td>
                <td className='py-2'>{emp.name}</td>
                <td className='py-2'>{emp.id}</td>
                <td className='py-2'>{emp.contact}</td>
                <td className='py-2'>{emp.department}</td>
                <td className='py-2'>
                  <button
                    onClick={() => handleEdit(emp.id)}
                    className='text-blue-500 hover:text-blue-700 mr-4'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className='text-red-500 hover:text-red-700'
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {expandedProfile === emp.id && (
                <tr className='border-b'>
                  <td colSpan="6" className='py-4'>
                    <div
                      className='p-4 rounded-lg flex items-center'
                      style={{
                        backgroundImage: 'url("wave.gif")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className='bg-white bg-opacity-75 p-4 rounded-lg flex-grow'>
                        <h2 className='text-xl font-semibold'>{emp.name}</h2>
                        <p><strong>ID:</strong> {emp.id}</p>
                        <p><strong>Contact:</strong> {emp.contact}</p>
                        <p><strong>Department:</strong> {emp.department}</p>
                        {/* Add more details if needed */}
                      </div>
                      <div className='flex-grow'>
                        <img
                          src='perform.png'
                          alt={`${emp.name}'s profile`}
                          className='w-100 rounded-lg object-cover opacity-80'
                        />
                      </div>
                      <div className='flex-grow text-right'>
                        <img
                          src={emp.profilePic}
                          alt={`${emp.name}'s profile`}
                          className='w-44 rounded-md object-cover'
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
