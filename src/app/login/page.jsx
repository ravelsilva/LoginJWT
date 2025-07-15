"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Login bem-sucedido! Redirecionando...");
      setTimeout(() => {
        router.push("/dashboard");
      }, "1000");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </main>
  );
};

export default page;
