import React, {useState} from "react";
import Project from "./Projects"


function MyProjects() {
  return (
    <section id="myProjects" className="smooth-scroll block">
      <div className="bg-[url('../../public/cool-background.svg')] bg-cover bg-white bg-fixed h-full">
        <h1 className="pt-10 text-center align-middle font-titles text-5xl ">
          My Projects
        </h1>
        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:items-start ">
          <Project
            projectName="Frame Website"
            projectGitURL="https://github.com/bobrandy13/frame-website-v2"
            projectImage="/frames.jpg"
            projectDescription="This was a project that I built for my parents, using technologies such as NextJS, Tailwind, MongoDB, Prisma, and Vercel."
            technologies={["nextjs", "prisma", "mongodb", "tailwind"]}
          />
          <Project
            projectName="Report Generator"
            projectGitURL=""
            projectImage="/reports.jpg"
            projectDescription="This project, I was asked by my Software Teacher, to produce a piece of software that would allow her to generate reports for students, instead of writing them manually. Through this, I learnt how to use node and writing and reading from files. "
            technologies={["javascript", "nodejs"]}
          />
          <Project
            projectName="Weather Site"
            projectGitURL="https://github.com/bobrandy13/weather-site"
            projectImage="/weather.jpg"
            projectDescription="This was my first project learning how to use javascript, making api calls. "
            technologies={["javascript", "html", "css"]}
          />
          <Project
            projectName="Canvas to Habitica API"
            projectGitURL=""
            projectImage={"/check.jpg"}
            projectDescription="Personal project, learning how to use node as well as efficiently call APIs. "
            technologies={["javascript", "nodejs"]}
          />
          <Project
            projectName="Twitter Clone"
            projectGitURL="https://github.com/bobrandy13/twitter-clone"
            projectImage={"/twitter.jpg"}
            projectDescription="In this app, I learnt about full stack development, but more specifically, I learnt about using Prisma, Next-Auth, and the T3 stack to create a twitter clone. During this project, I learnt various things.  "
            technologies={["nextjs", "prisma", "mongodb", "tailwind", "t3 stack"]}
          />
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
