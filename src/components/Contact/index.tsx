/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { forwardRef, Ref, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquareUpwork } from "react-icons/fa6";
import Magnetic from "../magnetic";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = forwardRef(function index(props, ref: Ref<HTMLDivElement>) {
  const [isOpen, setOpen] = useState(true);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={` bottom-10 z-10 mb-7 bg-[#C9FD74] right-7 fixed w-14 text-black rounded-full`}
        >
          <motion.ul
            className="flex flex-col gap-5 text-3xl align-middle justify-center py-6 mx-2"
            initial="hidden"
            animate="visible"
          >
            <motion.li
              className="flex justify-center"
              transition={spring}
              variants={itemVariants}
            >
              <a href="https://www.linkedin.com/in/slah-chebil/" target="_blank">
                <FaLinkedinIn className=" hover:scale-110 ease-in-out" />
              </a>
            </motion.li>
            <motion.li className="flex justify-center" variants={itemVariants}>
              <a href="https://github.com/SlahChebil" target="_blank">
                <FaGithub className=" hover:scale-110 ease-in-out" />
              </a>
            </motion.li>
            <motion.li className="flex justify-center" variants={itemVariants}>
              <a href="mailto:sleh.chebil.sc@gmail.com" target="_blank">
                <IoIosMail className=" hover:scale-110 ease-in-out" />
              </a>
            </motion.li>
            <motion.li className="flex justify-center" variants={itemVariants}>
              <a href="https://www.upwork.com/freelancers/~0155d55c3d966b4a42" target="_blank">
                <FaSquareUpwork className=" hover:scale-110 ease-in-out" />
              </a>
            </motion.li>
            <motion.li className="flex justify-center" variants={itemVariants}>
              <a href="https://wa.me/+21654369281" target="_blank">
                <FaWhatsapp className=" hover:scale-110 ease-in-out" />
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
      <div className={`${styles.header}`}>
        <Magnetic>
          <div
            className={`${isOpen ? styles.close : styles.burger} `}
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            <div
              ref={ref}
              className={`${styles.bounds} ${isOpen ? "object-none" : ""}`}
            ></div>
          </div>
        </Magnetic>
      </div>
    </>
  );
});

export default Header;
