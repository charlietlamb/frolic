import React from 'react';

export default function ComingSoon() {
  return (
    <div className="bg-dark flex flex-col w-full min-h-screen p-4">
      <div className="bg-green rounded-base flex flex-col items-center justify-center flex-grow">
        <img
          src="/logos/Frolic_Logo Suite_PL_violet.png"
          alt=""
          className="w-[50%]"
        />
        <h1 className="font-futura h2-size">Coming Soon...</h1>
      </div>
    </div>
  );
}
