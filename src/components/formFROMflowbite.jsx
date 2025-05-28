import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear error while typing
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear error while typing
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Reset error messages
    let valid = true;
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email.trim()) {
      setEmailError("Please enter your email.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a  email address.");
      valid = false;
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }

    if (valid) {
      console.log("Login info:", { email, password });
      // Submit logic here (API, routing, etc.)
    }
  };

  return (
    <form className="max-w-sm mx-auto pt-[100px]">
      <h1 className="text-center text-blue-600 text-2xl font-semibold mb-6">Log In Here</h1>

      {/* Email Field */}
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          value={email}
          onChange={handleEmail}
          type="email"
          id="email"
          className={`bg-gray-50 border ${emailError ? "border-red-500" : "border-gray-300"} 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="name@flowbite.com"
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>

      {/* Password Field */}
      <div className="mb-5 relative">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          value={password}
          onChange={handlePassword}
          type={showPassword ? "text" : "password"}
          id="password"
          className={`bg-gray-50 border ${passwordError ? "border-red-500" : "border-gray-300"} 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 
            dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
        <div
          onClick={togglePassword}
          className="absolute top-10 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
      </div>

      {/* Remember Me */}
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50
              focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600
              dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Remember me
        </label>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleClick}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;