import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 bg-red-200">Huddle01 Meet</h1>
          <p className="text-gray-300">Start or join a video meeting</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/meeting/create"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Create New Meeting
          </Link>

          <Link
            href="/meeting/join"
            className="block w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center border border-white/30"
          >
            Join Meeting
          </Link>
        </div>
      </div>
    </main>
  );
}