"use client";
import NavBar from "@/component/NavBar";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = form;

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("User already exists! Please login instead.");
      return;
    }

    users.push({ name, email, phone, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now login.");
    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <NavBar />
      <section className="p-[16px] sm:h-screen">
        <h1 className="text-[4.2rem] font-bold text-center mb-6 tracking-wide">
          SIGN IN
        </h1>
        <p className="text-center text-[1.8rem] mb-8 text-gray-600">
          Already have an account?{" "}
          <a href="/account/login" className="text-[#7e747f] underline">
            Login here!
          </a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-[58rem] mx-auto px-[16px] flex flex-col gap-[8px]"
        >
          <label className="text-[2rem] font-medium">NAME</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[1rem] rounded-[8px]"
          />

          <label className="text-[2rem] font-medium">EMAIL</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[2.4rem] rounded-[8px]"
          />

          <label className="text-[2rem] font-medium">PHONE NUMBER</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[1rem] rounded-[8px]"
          />

          <label className="text-[2rem] font-medium">PASSWORD</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[2.4rem] rounded-[8px]"
          />

          <label className="text-[2rem] font-medium">CONFIRM PASSWORD</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[2.4rem] rounded-[8px]"
          />

          <div className="text-center mb-[2rem]">
            <button
              type="submit"
              className="text-[2rem] font-medium py-[6px] px-[50px] rounded-[8px] hover:opacity-90 cursor-pointer text-white bg-[#7e747f]"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
