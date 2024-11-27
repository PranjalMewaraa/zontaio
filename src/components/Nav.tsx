import React from "react";

const Nav = () => {
  return (
    <div className="w-full px-16 font-black h-20 flex justify-between items-center">
      <p className="font-[clash] text-9xl">Zonta.io</p>
      <div
        className="gap-4 flex"
        onClick={() => {
          window.open("https://exchange.zonta.io");
        }}
      >
        <button className="px-8 py-2 bg-blue-800 rounded-full font-semibold">
          Login
        </button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Nav;
