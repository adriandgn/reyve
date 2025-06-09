import React from "react";

const RegenerateBanner = () => {
  return (
    <div
      className="w-full min-h-[180px] flex items-center justify-center overflow-hidden m-0 p-0"
      style={{
        backgroundImage: `url('/grad-4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 0,
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg animate-pulse p-0 m-0"
        style={{ fontFamily: 'Brockmann, sans-serif', margin: 0, padding: 0, width: '100%', textAlign: 'center', display: 'block' }}
      >
        Re:YVE. Regenerate. Reimagine. Revive.
      </h1>
    </div>
  );
};

export default RegenerateBanner;

