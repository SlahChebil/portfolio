"use client";
import React, { useEffect, useState } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import styles from "./header.module.scss";
import {useTheme} from 'next-themes'
import { MdDarkMode  } from "react-icons/md";

const ResumeFile = require("../../../public/next.svg");

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isDarkMode, setDarkMode] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {theme, setTheme} = useTheme()
  const DownloadPDF = () => {
    const pdfUrl = "/public/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setDarkMode(theme === 'dark');
  }, []);
    return (
    <nav
      className={`w-full mx-auto flex max-w-7xl items-center justify-between py-6 ${GeistMono.className} mb-24`}
      aria-label="Global"
    >
      <div className="flex items-baseline justify-between w-full">
        <span>
          <a href="mailto:sleh.chebil.sc@gmail.com" target="_blank" className={`text-2xl font-bold dark:bg-black`}>
            Slah Chebil
          </a>
        </span>
        <ul className="list-none flex flex-row gap-6 items-center">
          <li className="hover:text-[#C9FD74]">About</li>
          <li
            className={`hover:${styles.custom}`}
            onClick={() => DownloadPDF()}
          >
            Resume
          </li>
          <li>
            <div
              id="darkToggle"
              className="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white"
            >
              <div className="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
                {theme === 'dark' ? (
                  <svg
                    className="absolute w-6 h-6 transition duration-700 transform ease group-hover:translate-y-2"
                    id="sun"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ) : (
                  <MdDarkMode className="absolute w-6 h-6 transition duration-700 transform ease group-hover:translate-y-2" onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
