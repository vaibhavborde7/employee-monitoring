'use client'

import React, { useEffect, useState } from 'react';

export default function Card() {
  const [employees, setEmployees] = useState([]);

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

  console.log(employees, 'these are employees');

  return (
    <div className='bg-white p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {employees.slice(0, 4).map((emp) => (
          <div
            key={emp.id}
            className='bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105'
          >
            <div className='flex justify-center mb-4'>
              <img
                src={emp.profilePic}
                alt={`${emp.name}'s profile`}
                className='w-24 h-24 rounded-full object-cover'
              />
            </div>
            <h1 className='text-black text-xl font-semibold text-center'>{emp.name}</h1>
            <h2 className='text-gray-700 text-center'>{emp.department}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
