"use client";

import React, { useState } from "react";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

export default function HomePage() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
      <h2 className="text-5xl font-extrabold mb-6">Welcome to AgriConnect</h2>
      <p className="max-w-xl text-center text-lg mb-8">
        Connecting farmers, market sellers, and logistics providers directly to cut out brokers and improve agricultural product distribution.
      </p>
      <div className="mb-8">
        {showRegister ? <Register /> : <Login />}
      </div>
      <button
        className="text-sm underline"
        onClick={() => setShowRegister(!showRegister)}
      >
        {showRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </section>
  );
}
