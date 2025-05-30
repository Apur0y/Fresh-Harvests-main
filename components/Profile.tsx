'use client'
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  fullName?: string;
  email?: string;
  [key: string]: unknown;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  console.log(user);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedUser = jwtDecode<User>(token);
          setUser(decodedUser);
        } catch (error) {
          console.error("Invalid token:", error);
        }
      }
    }
  }, []);

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.fullName || user.email}</h1>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}
