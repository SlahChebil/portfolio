import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import { GeistMono } from "geist/font/mono";
import AngularIcon from "../../../public/skills/angular.svg";
import NestJs from "../../../public/skills/nestjs.svg";
import NodeJS from "../../../public/skills/nodejs.svg";
import ReactJS from "../../../public/skills/react.svg";
import RxJS from "../../../public/skills/rxjs.svg";
import TS from "../../../public/skills/typescript.svg";
import Experience from "./Experience";
type IconType = StaticImageData;
const index = () => {
  const skills = [
    "ReactJs",
    "Angular",
    "RxJs",
    "Redux",
    "Saga/Thunk",
    "NgRx",
    "Tailwind",
    "ChakraUI",
    "Cordova",
    "NodeJs",
    "NestJs",
    "TypeScript",
    "JavaScript",
    "GraphQL",
    "Jest",
    "CI/CD",
    "Supabase",
    "Firebase",
    "Gitlab",
  ];
  const Icons : IconType[]= [
    ReactJS,
    AngularIcon,
    RxJS,
    NodeJS,
    NestJs,
    TS,
  ];
  return (
    <>
      <div className="flex flex-col gap-6 items-center mb-32 sm:flex-row">
        <Image
          className="rounded-full border-4 border-[#C9FD74]"
          width={200}
          height={200}
          src="/profile.png"
          alt="Picture of the author"
        />
        <div>
          <h1>
            <span className="text-2xl font-semibold">
              👋 Heyy, I&apos;m Slah
            </span>
            <br></br>
            I&apos;m a Full Stack Developer from{" "}
            <span className="underline decoration-4 underline-offset-4 decoration-[#C9FD74] hover:bg-[#C9FD74] hover:ease-in duration-200">
              Tunisia
            </span>{" "}
            , use JavaScript frameworks for both frontend and backend. I love to
            work and test other languages like Java & Python.
          </h1>
          <span className="text-sm font-light">
            Web Developer | Contractor | Freelancer
          </span>
        </div>
      </div>
      <div className={`${GeistMono.className} mb-6`}>
        <h1 className="font-black text-xl my-6 dark:from-neutral-500">
          Skills
        </h1>
        <div>
          <ul className="flex gap-6 overflow-auto">
            {Icons.map((Icon, index) => {
              return (
                <>
                  <li className="min-w-[6rem] item p-4  flex justify-center items-center group border-2 rounded-md hover:border-[#C9FD74]" key={index}>
                    <Image
                      src={Icon}
                      className="md:grayscale md:group-hover:grayscale-0 select-none"
                      alt={"NodeJs"}
                    ></Image>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="rounded-lg transition duration-200 border-solid border-2 hover:border-[#C9FD74] w-full p-3 md:p-6 flex flex-col">
        <ul className="list-none flex flex-wrap break-words text-pretty gap-3 w-auto">
          {skills.map((skill, index) => {
            return (
              <>
                <span key={index} className="font-medium">
                  {skill}
                </span>
              </>
            );
          })}
        </ul>
      </div>
      <Experience></Experience>
    </>
  );
};

export default index;
