import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <div className="bg-black p-5 flex justify-between items-center h-24">
          <div className="flex items-center space-x-4">
            <Image src="/eslogo.jpg" alt="Logo" width={70} height={70} />
            <h1 className="text-white text-3xl font-mono">The Employers</h1>
          </div>
          <div className="text-white flex items-center space-x-4">
            <h1>Home</h1>
            <h2>About Us</h2>
            <h3>Contact</h3>
            <Link href="http://localhost:3000/admin" passHref>
              <button className="relative text-white bg-[#4eb6f7] rounded-lg border-[#4eb6f7] px-4 py-2 transition transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
