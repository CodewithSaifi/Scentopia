"use client";
import NavBar from "@/component/NavBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      alert(`Welcome back, ${matchedUser.name}!`);
      setForm({ email: "", password: "" });
      router.push("/account/userinformation"); // ✅ redirect here
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <section className="p-[16px] min-h-[60vh]">
        <h1 className="text-[4.2rem] font-bold text-center mb-6 tracking-wide">
          LOGIN
        </h1>
        <p className="text-center text-[1.8rem] mb-8 text-gray-600">
          Don’t have an account?{" "}
          <a href="/account/signup" className="text-[#7e747f] underline">
            Sign up here!
          </a>
        </p>

        <form
          onSubmit={handleLogin}
          className="max-w-[58rem] mx-auto px-[16px] flex flex-col gap-[8px]"
        >
          <label className="text-[2rem] font-medium">EMAIL</label>
          <input
            type="email"
            name="email"
            value={form.email}
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

          <div className="text-center">
            <button
              type="submit"
              className="text-[2rem] font-medium py-[6px] px-[50px] rounded-[8px] hover:opacity-90 cursor-pointer text-white bg-[#7e747f]"
            >
              LOGIN
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
