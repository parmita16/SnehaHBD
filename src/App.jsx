import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center relative overflow-hidden">
      {/* Flowers */}
      <div className="absolute text-5xl top-8 left-8 animate-bounce">
        🌸
      </div>
      <div className="absolute text-4xl bottom-10 right-10 animate-pulse">
        🌼
      </div>
      <div className="absolute text-4xl top-20 right-20 animate-bounce">
        🌺
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-[350px] text-center">
        <h1 className="text-4xl font-bold text-pink-600">
          🎂 Happy Birthday
        </h1>
        <h2 className="text-3xl font-bold mt-3 text-purple-600">
          Sneha Jha
        </h2>
        <p className="mt-2 text-gray-600 italic">
          a.k.a.
        </p>
        <h3 className="text-2xl text-pink-500 font-bold">
          Isssnehuuu Pisssnehuuu💖
          Happy 22 Snehahahahahahaha.
          Keep Laughing hehe your laugh is contagious!!
        </h3>
        <div className="text-7xl my-6">
          🎂
        </div>
        <p className="text-gray-700">
          Wishing you endless happiness,
          laughter,
          good health,
          and lots of beautiful memories.
        </p>
        <button
          onClick={() => setShow(!show)}
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
        >
          Celebrate 🎉
        </button>
        {show && (
          <div className="mt-6">
            <div className="text-4xl animate-bounce">
              🎉🎉🎉
            </div>
            <p className="mt-4 text-pink-600 font-semibold">
              You deserve all the love,
              smiles,
              cake,
              flowers,
              and happiness in the world!
            </p>
            <div className="text-4xl mt-4">
              🌸💐🌷🌹🌼
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
