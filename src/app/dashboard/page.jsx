"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/protected");
      if (res.status === 401) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);
  return (
    <div>
      <h1>Bem-vindo ao Dashboard! 🎉</h1>
      <p>Esta rota é protegida.</p>
    </div>
  );
};

export default Dashboard;
