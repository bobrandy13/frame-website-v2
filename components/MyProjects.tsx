import React from "react";
import Project from "./Projects"

function MyProjects() {
  return (
    <section id="myProjects" className="smooth-scroll block">
      <div className="bg-[url('../../public/cool-background.svg')] bg-cover bg-fixed h-full">
        <h1 className="pt-10 text-center align-middle font-titles text-5xl ">
          My Projects
        </h1>
        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:items-start ">
          <Project
            projectName="Frame Website"
            projectGitURL=""
            projectImage="/../public/frames.jpg"
            projectDescription=""
            technologies={["nextjs", "prisma", "mongodb", "tailwind"]}
          />
          <Project
            projectName="Report Generator"
            projectGitURL=""
            projectImage="/../public/reports.jpg"
            projectDescription=""
            technologies={["javascript", "nodejs"]}
          />
          <Project
            projectName="Weather Site"
            projectGitURL=""
            projectImage="/../public/weather.jpg"
            projectDescription=""
            technologies={["javascript", "html", "css"]}
          />
          <Project
            projectName="Canvas to Habitica API"
            projectGitURL=""
            projectImage={"/../public/check.jpg"}
            projectDescription=""
            technologies={["javascript", "nodejs"]}
          />
          <Project
            projectName="Twitter Clone"
            projectGitURL="https://github.com/bobrandy13/twitter-clone"
            projectImage={"/../public/twitter.jpg"}
            projectDescription="In this app, I learnt about full stack development, but more specifically, I learnt about using Prisma, Next-Auth, and the T3 stack to create a twitter clone. During this project, I learnt various things.  "
            technologies={["nextjs", "prisma", "mongodb", "tailwind", "t3 stack"]}
          />
        </div>
      </div>
    </section>
  );
}

export default MyProjects;