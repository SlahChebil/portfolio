import React from "react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


const index = () => {
  return (
    <nav
      className={`w-full mx-auto flex max-w-7xl items-center justify-between py-6 ${GeistMono.className} mb-24`}
      aria-label="Global"
    >
      <div className="flex items-baseline justify-between w-full">
        <span>
          <a href="/" className={`text-2xl font-bold`}>
            Slah Chebil
          </a>
        </span>
        <ul className="list-none flex flex-row gap-6 items-center">
          <li className="hover:text-[#C9FD74]">About</li>
          <li className="hover:text-[#C9FD74]">Resume</li>
          <li>
            <div
              id="darkToggle"
              className="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white"
            >
              <div className="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
                <svg
                  className="absolute w-6 h-6 transition duration-700 transform ease"
                  id="sun"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <svg
                  className="absolute hidden w-6 h-6 transition duration-700 transform ease"
                  id="moon"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
