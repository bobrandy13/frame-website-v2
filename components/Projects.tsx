import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Projects({ projectName, projectGitURL, projectImage, projectDescription, technologies}: {projectName:string, projectGitURL:string, projectImage: string, projectDescription: string, technologies: Array<string>}) {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  return (
    <div className="m-2 mt-10 h-72 w-4/5 rounded-lg border border-black bg-white text-center align-middle shadow-xl hover:opacity-50 hover:shadow-xl md:w-1/5">
      <div className="group relative flex h-2/3 w-full items-center justify-center" onClick={() => {
        setOpen((o) => !o)
      }}>
        <Image src={projectImage} alt="project image" fill />
        <button
          className="absolute bg-white opacity-0 group-hover:opacity-100"
        >
          Have a look
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div>
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            <h1 className="text-2xl font-thin m-2">{projectDescription}</h1>
            <div className='p-3 m-3 border w-48 rounded border-gray-900 ml-2'>
              <Link href={projectGitURL}>
                <Image
                  src="/../public/github-mark.png"
                  alt="github logo"
                  width={30}
                  height={30}
                  className='inline'
                />
                <p className='float-right mt-0.5'>Open with GitHub</p>
              </Link>
            </div>
          </div>
        </Popup>
      </div>
      <div className="flex items-center justify-center h-8">
        <h1>{projectName}</h1>
      </div>
      <div className=''>
          {technologies.map((value, key) => {
            return <div key={key} className='badge badge-accent m-1'>{value}</div>
          })}
      </div>
    </div>
  );
}

export default Projects;