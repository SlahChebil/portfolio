"use client";
import Preloader from "@/components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import { slideUp } from "@/components/Preloader/anim";
import Landing from "@/components/Landing";
import Contact from "@/components/Contact";
import StickyCursor from "@/components/stickyCursor";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const stickyElement = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="dark:bg-black light:bg-pink">
        <Contact ref={stickyElement} />
        <StickyCursor stickyElement={stickyElement} />
        <AnimatePresence mode="wait">
          {isLoading && <Preloader></Preloader>}
        </AnimatePresence>
        <motion.main
          variants={slideUp}
          initial="initial"
          animate="enter"
          className={styles.landing}
        >
          <div className="w-full max-w-[50rem] text-[1.1rem] leading-[34px] tracking-[0.9px] m-auto px-[1.45rem] py-6">
            <Header></Header>
            <Landing></Landing>
          </div>
        </motion.main>
      </main>
    </ThemeProvider>
  );
}
