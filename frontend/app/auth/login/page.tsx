'use client'

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { setToken } from "@/utils/authStore";
import publicApi from '@/utils/publicApi';
import Image from 'next/image'

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await publicApi.post("/api/auth/login", {
        userEmail: email,
        userPassword: password,
      });

      const { accessToken, message } = res.data;

      if (!accessToken) throw new Error("No access token returned");

      setToken(accessToken);
      setMessage(message ?? "Login successful");

      if (res.status === 200) {
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
  <main className="min-h-screen flex items-center justify-center bg-[#F2EFF9] px-4">

  {/* Center Card */}
  <div className="flex w-full max-w-[1100px] min-h-[600px] bg-[#F2EFF9] rounded-2xl overflow-hidden">

    {/* Left panel (hidden on small) */}
    <div className="hidden lg:flex w-1/2 flex-col items-start justify-center px-8">
      <h1 className='text-4xl lg:text-6xl font-bold text-left mb-4 text-[#3F2870]'>
        Welcome to NAGAalaga: Your Partner in Maternal Health
      </h1>
      <p className='text-left text-gray-700'>
        Empowering Mothers, Connecting Barangays, Saving Lives.
      </p>
       <button
          type="submit"
          className=" py-3 px-6 rounded-lg bg-[#5A6CFF] text-white font-bold hover:opacity-90 transition cursor-pointer mt-4"
        >
          Learn More
        </button>

    </div>

    {/* Right panel */}
    <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-8 space-y-6 bg-[#F2EFF9] border border-[#3F2870]/25 rounded-2xl shadow-xl">

      {/* Logo */}
      <Image
        src="/assets/mainLogo.svg"
        alt="Logo"
        width={200}
        height={200}
        className="w-40 h-auto"
      />

      {/* Title */}
      <h1 className='text-3xl font-extrabold text-[#3F2870] text-center'>Login</h1>

      {/* Form */}
      <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg border border-[#3F2870]/25 bg-[#F2EFF9] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3F2870] transition"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border border-[#3F2870]/25 bg-[#F2EFF9] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3F2870] transition"
        />

        <button
          type="submit"
          className="cursor-pointer w-full py-3 rounded-lg bg-[#3F2870] text-white font-bold hover:opacity-90 transition"
        >
          Login
        </button>
      </form>

      {/* Optional register link */}
      <p className="text-sm text-center text-gray-700 font-medium">
        No account yet?{" "}
        <span className="text-[#5A6CFF] cursor-pointer hover:underline font-bold">
          Register
        </span>
      </p>

    </div>
  </div>
</main>

  );
}
