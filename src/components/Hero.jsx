import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-950 text-white">
      <Navbar />
      {/* Radial Blob using Tailwind only */}
      <div className="absolute w-[850px] h-[400px] bg-violet-950 opacity-40 blur-3xl rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Actual Hero Content */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-7xl text-white tracking-tighter font-semibold">
          Introducing Loop.AI
        </h1>
        <p className="mt-4 max-w-xl text-lg">
          Create faster, caption better, and stay ahead of trends. Your
          intelligent creative partner.
        </p>
        <button className="mt-6 px-6 py-3 bg-white hover:bg-accent-dark transition rounded-xl text-black font-semibold">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}
