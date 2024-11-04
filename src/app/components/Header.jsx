import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <div className="bg-black p-5 flex flex-col md:flex-row justify-between items-center h-auto md:h-24">
          <div className="flex items-center space-x-4">
            <img src="/eslogo.jpg" alt="Logo" width={70} height={70} />
            <h1 className="text-white text-3xl font-mono">The Employers</h1>
          </div>
          <div className="text-white flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <h1 className="cursor-pointer">Home</h1>
            <h2 className="cursor-pointer">About Us</h2>
            <h3 className="cursor-pointer">Contact</h3>
            <Link href="/admin" passHref>
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
