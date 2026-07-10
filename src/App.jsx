import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
      {/* Floating Flowers */}
      <div className="absolute text-5xl top-8 left-8 animate-spin-slow">
        🌸
      </div>
      <div className="absolute text-4xl bottom-10 right-10 animate-pulse">
        🌼
      </div>
      <div className="absolute text-4xl top-20 right-20 animate-bounce">
        🌺
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-[380px] text-center transform transition hover:scale-105 hover:shadow-pink-300/50">
        <h1 className="text-4xl font-extrabold text-pink-500 drop-shadow-md">
          🎂 Happy Birthday
        </h1>
        <h2 className="text-3xl font-bold mt-3 text-purple-700">
          Sneha Jha
        </h2>
        <p className="mt-2 text-gray-500 italic">a.k.a.</p>
        <h3 className="text-xl text-pink-500 font-semibold leading-relaxed">
          Isssnehuuu Pisssnehuuu💖 <br />
          Happy 22 Snehahahahahahaha! <br />
          Keep laughing—your laugh is contagious!!
        </h3>

        <div className="text-7xl my-6 animate-wiggle">🎂</div>

        <p className="text-gray-700">
          Wishing you endless happiness, laughter, good health,
          and lots of beautiful memories.
        </p>

        <button
          onClick={() => setShow(!show)}
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-110"
        >
          Celebrate 🎉
        </button>

        {show && (
          <div className="mt-6 animate-fadeIn">
            <div className="text-4xl animate-bounce">🎉🎉🎉</div>
            <p className="mt-4 text-pink-600 font-semibold">
              You deserve all the love, smiles, cake, flowers,
              and happiness in the world!
            </p>
            <div className="text-4xl mt-4 animate-spin-slow">
              🌸💐🌷🌹🌼
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
