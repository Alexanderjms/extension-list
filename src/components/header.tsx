"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-900 h-20 ml-4 sm:ml-8 md:ml-16 lg:ml-40 mr-4 sm:mr-8 md:mr-16 lg:mr-40 mt-10 rounded-lg shadow-lg p-4 transition-colors duration-300 font-noto">
      <Image
        src="/img/logo.png"
        alt="Logo Inicial"
        width={180}
        height={180}
        className="w-auto h-auto max-h-12 sm:max-h-16"
      />
      <div className="bg-slate-800 rounded-2xl p-3">
        <Image
          src="/img/icon-sun.svg"
          alt="Light mode icon"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
}
