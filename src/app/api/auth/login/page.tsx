"use client";

import { TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedBack, setFeedBack] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedBack("");
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response?.error) {
      setFeedBack("Login failed");
    } else {
      setFeedBack("Login successful");
      router.push("/");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex justify-center p-10">
      <div className="flex flex-col items-center p-7 w-120 bg-white rounded-xl shadow-[0_0_5px_0_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl font-semibold text-blue-700 mb-1">
          Welcome Back
        </h1>
        <p className="text-lg mb-10 text-gray-500">
          Sign in to your account to continue
        </p>

        <div className="w-full mb-8">
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border-2 border-blue-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full mb-8">
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border-2 border-blue-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600"
        >
          Log In
        </button>

        {feedBack && (
            <p className={`mt-4 text-center ${feedBack === "Login successful" ? "text-green-600" : "text-red-600"}`}>{feedBack}</p>
        )}
      </div>
    </form>
  );
};

export default LoginPage;
