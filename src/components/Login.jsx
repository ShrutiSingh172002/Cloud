import React, { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        alert("Login successful!");
        setIsOpen(false);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
