import Image from 'next/image';
import React from 'react';

function Projects({ projectName, projectGitURL, projectImage}: {projectName:string, projectGitURL:string, projectImage: string}) {
  return (
    <div className="ml-10 mt-10 h-72 w-1/5 rounded-sm border border-black bg-white text-center align-middle hover:opacity-50 hover:shadow-xl">
      <div className="relative h-2/3 w-full group flex items-center justify-center">
        <Image
          src="https://fakeimg.pl/250x100/ff0000/000"
          alt="project image"
          fill
        />
        <button className="absolute opacity-0 group-hover:opacity-100 bg-white" onClick={() => {console.log("clicked")}}>
          Have a look
        </button>
      </div>
      <div className="relative h-1/3 w-full align-middle">
        <h1>{projectName}</h1>
      </div>
    </div>
  );
}

export default Projects;