import React from "react";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="flex items-center justify-center">
        <div className="w-lg px-8 py-8 bg-amber-400 rounded-xl shadow-lg">
          <h1 className="mb-10 text-4xl text-center font-chewy">Register</h1>
          <form className="w-full flex flex-col items-center justify-center">
            <label htmlFor="username" className="sr-only">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              className="input mb-4"
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              className="input mb-4"
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="sr-only">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              className="input mb-8"
              onChange={handleChange}
              required
            />
            <button type="submit" className="button2">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
