// pages/index.js

import Navbar from "@/components/navbar";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
export default async function Home() {
  const user = await currentUser();
  function userName(){
    if(!user) return <div>Welcome to ByteBin</div>;
    return <div>Welcome to ByteBin {user?.firstName}</div>
  }
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <h1 className="text-5xl font-bold">
        {userName()}
        </h1>
        <p className="mt-3 text-2xl">
          Get started by clicking the button below!
        </p>
        <Link
            className="font-medium text-primary-600 hover:underline"
            href="/dashboard"
          >
           Get Started -&gt;
          </Link>
    </div>
  </div>
</div>
    
    </>
  );
}



