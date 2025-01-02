import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://veelomobi.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/veelo.png"
                height={150}
                width={150}
                style={{ objectFit: 'contain' }}
                alt="Piyush Dewangan - UX Design Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Veelo Mobility</p>
                <p className="text-gray-500 text-[10px]">
                  I designed and developed a comprehensive system that includes multiple components to streamline operations and enhance user experience. The system features an intuitive admin dashboard for managing operations efficiently, along with robust database management for seamless data storage and retrieval. I also worked on the development of mobile applications to ensure accessibility and usability for end-users. The system was built with scalability and performance in mind, incorporating best practices in coding, security, and architecture. Each component was integrated seamlessly to deliver a cohesive and reliable solution, tailored to meet the specific requirements of the project.
                </p>
              </div>
            </div>
          </Link>
          {/* <Link
              href="https://hireside.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              <div className="flex-row flex mb-5">
                <Image
                  src="/SecondProject.png"
                  height={150}
                  width={150}
                  alt="Piyush Dewangan - UX Design Project"
                />
                <div className="p-3">
                  <p className="text-white font-semibold text-xl">HireSide</p>
                  <p className="text-gray-500 text-[10px]">
                    Developed a web application on Next.js that allows users to
                    apply for jobs, create job posts, and manage their company
                    profiles.
                  </p>
                </div>
              </div>
            </Link> */}
        </div>
        {/* <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.vergesystems.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="Piyush Dewangan - UX Design Project"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Verge Systems
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="http://44.201.47.75/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Piyush Dewangan - UX Design Project"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Payoasis</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
