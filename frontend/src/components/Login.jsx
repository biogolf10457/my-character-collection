import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../config";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!data.success) {
        alert("Wrong email or password.");
      } else {
        localStorage.setItem("token", data.token);
        setAuth(true);
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-12 lg:py-10 bg-linear-to-b from-amber-100 to-amber-200">
      <div className="flex items-center justify-center">
        <div className="w-lg px-8 py-8 bg-amber-400 rounded-xl shadow-lg">
          <h1 className="mb-10 text-4xl text-center font-chewy">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
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
              id="password"
              value={formData.password}
              placeholder="Password"
              className="input mb-8"
              onChange={handleChange}
              required
            />
            <button type="submit" className="button2" disabled={isLoading}>
              {isLoading && (
                <div className="loading-spin inline-flex align-middle max-w-6 max-h-6 mr-2"></div>
              )}
              <div className="inline-flex align-middle">Login</div>
            </button>
          </form>
          {isLoading && (
            <p className="mt-4 text-center">
              *Note: It's may take a minute to start the service. Sorry for the
              inconvenience.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
