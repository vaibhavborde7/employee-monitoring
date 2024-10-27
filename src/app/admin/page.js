"use client"
import { useState } from 'react';
import axios from "axios";
import Link from 'next/link';

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [contact, setContact] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/employees/create', {
        name,
        id,
        profilePic,
        contact,
        department,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error || "An error occurred");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-heading">Employee Sign Up</h1>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        <label>
          Profile Pic URL:
          <input
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
        
      </form>
      {message && <div className="message-popup">{message}</div>}

      <Link href="/" className="back-to-home">
          Back to Home
        </Link>
      <style>{`
        .container {
          background-image: url('bluebg.jpg');
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          position: relative;
        }
        .form {
          background: rgba(255, 255, 255, 0.8);
          padding: 18px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .form-heading {
          text-align: center;
          margin-bottom: 10px;
          font-size: 24px;
          font-weight: bold;
          color: #333;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        label {
          display: block;
          margin-bottom: 8px;
        }
        input {
          width: 100%;
          padding: 6px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #4eb6f7;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-bottom: 10px;
        }
        button:hover {
          background-color: #005bb5;
        }
        .back-to-home {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: #4eb6f7;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s;
        }
        .back-to-home:hover {
          scale:105%;
          background-color: #005bb5;
        }
        .message-popup {
          position: fixed;
          top: 20px;
          left: 20px;
          background-color: #34eb74;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CreateEmployee;
