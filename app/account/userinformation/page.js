"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/component/NavBar";
import { useRouter } from "next/navigation";
import Footer from "@/component/Footer";
import Upload from "@/component/Upload";

const UserInformation = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      router.push("/account/login"); // not logged in, redirect to login
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    router.push("/account/login");
  };

  return (
    <>
      <NavBar />
      <h1 className="text-[4.8rem] font-semibold text-center mb-[2rem]">
        YOUR INFORMATION
      </h1>
      <section className="max-w-[1200px] mx-auto px-[16px] grid sm:grid-cols-2 gap-[3.2rem] items-center justify-center min-h-[70vh]">
        {user ? (
          <>
            <div>
              <Upload />
            </div>
            <div className="sm:mb-[10rem] mb-[8rem]">
              <h2 className="text-[2.4rem] font-medium">Name: {user.name}</h2>
              <p className="text-[2.4rem] font-medium">
                Phone No: {user.phone}
              </p>
              <p className="text-[2.4rem] font-medium">Email: {user.email}</p>
            </div>
          </>
        ) : (
          <p className="text-[2rem] text-gray-600">Loading user info...</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default UserInformation;
