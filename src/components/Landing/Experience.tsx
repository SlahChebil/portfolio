import { GeistMono } from "geist/font/mono";
import React from "react";

const Experience = () => {
  const Experiences = [
    {
      date: "08/2022 - today",
      company: "Proxym GROUP",
      linkCompany: "https://www.proxym-group.com/",
      title: "FullStack Developer",
      description:
        "My job at this company is to create banking and insurance web & mobile apps for several banks and insurance organizations in the MENA area. I do this by working on various projects with various teams and utilizing contemporary frameworks like Angular and ReactJs."
    },
    {
      date: "12/2021 - 03/2022",
      company: "Hortensia",
      title: "Frontend Developer",
      linkCompany: "https://www.hortensia-agency.com/#",
      description:
        "Worked in a large frontend team for developping a SAAS product for project managment. Was responsible for the frontend architecture while fixing major performance issues and the development of new features.",
    },
    {
      date: "06/2021 - 08/2021",
      company: "MasterBox",
      title: "Frontend Developer",
      linkCompany: "https://masterbox.rs/courses/",
      description:
        "Worked on a wordpress web app for e-learning solution for Masterbox in Serbia. Worked on new free trail feature and fixing UI problems.",
    },
  ];
  return (
    <div className={`mb-6`}>
      <h1 className={`${GeistMono.className} font-black text-xl my-6`}>
        Experience
      </h1>
      {Experiences.map((exp , index) => {
        return (
          <>
            <div key={index} className=" rounded-lg w-full flex flex-col gap-1 items-start mb-9">
              <div className="flex flex-col gap-2 rounded-lg transition duration-200 md:hover:bg-opacity-20  md:hover:border-solid border-2 md:hover:border-[#C9FD74] p-3 md:p-6 md:hover:backdrop-blur-md">
                <div className="w-full flex flex-col text-sm md:text-base">
                  <span className="font-semibold">
                  {exp.company}
                  </span>
                  <a className="font-light text-sm" href={exp.linkCompany} target="_blank">{exp.title}, {exp.date}</a>
                </div>
                <p className="text-start">{exp.description}</p>
                <ul className="list-disc marker:text-[#d4d4d4] pl-8">
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Experience;
