import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-3xl font-bold">Food Duel</h1>
      <p className="text-center text-gray-600 max-w-lg">
        We’ll show two food groups at a time. Pick your fave. After a few
        rounds, we’ll reveal your top picks.
      </p>
      <Link
        href="/duel"
        className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800"
      >
        Start Food Duel
      </Link>
      <div className="text-sm text-gray-500 mt-6">v1 — session only, no account</div>
    </div>
  );
}
