import React from "react";
import Link from "next/link";

function Tags() {
  return (
    <>
      <Link
        href="#myProjects"
        className="absolute top-6 left-5 font-sdf text-3xl text-gray-800 transition delay-150 ease-in-out hover:translate-x-8 hover:scale-110 hover:text-gray-100 hover:shadow-lg"
        scroll={false}
      >
        My Projects
      </Link>
      <Link
        href="#testomanials"
        className="absolute top-20 left-5 font-sdf text-3xl text-gray-800 hover:scale-110 hover:text-gray-100 hover:shadow-lg"
      >
        Testominials
      </Link>
    </>
  );
}

export default Tags;