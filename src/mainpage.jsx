import React from 'react';
import './App.css'; // Import custom styles

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-6xl font-extrabold mb-6 animate-bounce">🔥 Two Eligible Boyfriends 🔥</h1>
      <img
        src="src/assets/pic.png" // Replace with actual image
        alt="Eligible Boyfriends"
        className="rounded-full border-8 border-white shadow-2xl hover:scale-110 transition-transform duration-300"
      />
      <p className="mt-6 text-2xl font-bold bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition-all">
        want the most eligible boyfriend in the town 🌟
      </p>
      <div className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-black p-6 rounded-xl shadow-xl transform hover:rotate-3 hover:scale-105 transition-all">
          <h2 className="text-3xl font-bold mb-4">💖 Mokshith</h2>
          <p> - Bakes Cupcakes for you </p>
          <p> - Makes Scrap Book</p>
          <p> - Will be your driver</p>
          <p> - Daily flowers </p>
          <p> - Once commited doesnt lay his eyes on other girls </p>
          <p> - will be your pookie</p>
        </div>
        <div className="bg-white text-black p-6 rounded-xl shadow-xl transform hover:-rotate-3 hover:scale-105 transition-all">
          <h2 className="text-3xl font-bold mb-4">💖 Saatvik</h2>
          <p> - Bakes cupcakes for you and your friend's girlfriend</p>
          <p> - buys dresses for you</p>
          <p> - Will get cute gifts</p>
          <p> - Will be your driver</p>
          <p> - Loves you un-conditionally</p>
          <p> - Will be your pooike</p>
          <p>- you can ride two things</p>
        </div>
      </div>
      <h2 className="mt-12 text-5xl font-extrabold">✨ Perks of Dating Them ✨</h2>
      <ul className="mt-6 bg-white text-black p-6 rounded-xl shadow-lg text-xl max-w-2xl">
        <li>Unlimited fun & laughter</li>
        <li> lovely dates</li>
        <li>Personalized mixtapes</li>
        <li>will do anything for you</li>
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScxUpkrFGqkeNHmsfQR9T1CoN1S6Tg_4SUw-9mnVsEC6pSAOw/viewform?usp=dialog">
      <button className="mt-8 bg-red-500 text-white px-6 py-3 text-2xl font-bold rounded-full shadow-xl hover:bg-red-700 hover:scale-110 transition-all">
        Date Us Now! ❤️
      </button>
      </a>
    </div>
  );
};

export default MainPage;