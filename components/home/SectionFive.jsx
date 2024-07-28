import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Routely",
    about:
      "Routely is a shipping platform helping businesses & individuals with absolutely convenient, fast, and affordable shipping solutions.",
  },
  {
    title: "Trades Trek",
    about:
      "Trades Trek - the ultimate stock trading simulator that will supercharge your investment journey. ",
  },
  {
    title: "Flip-cbt",
    about:
      "FLIP provides computerized tests, examination management, quick grading systems, and collation of results instead of the use of pen and paper.",
  },
];

const SectionFive = () => {
  const router = useRouter();
  return (
    <div
      id="projects"
      className="max-w-[1300px] my-[120px] mx-auto px-4 md:px-14"
    >
      <h2 className="capitalize text-3xl md:text-5xl md:leading-[67.2px] font-bold mb-10">
        recent projects
      </h2>
      <div className="w-full grid md:grid-cols-3 gap-x-5 gap-y-[60px]">
        {projects.map((project, id) => (
          <div key={id}>
            <Image
              src={`/Project${id + 1}.png`}
              alt="project"
              className="w-full h-[400px] bg-[#D9D9D9] rounded-2xl"
              height={400}
              width={426.67}
              quality={100}
            />
            <p className="mt-3 mb-5 text-2xl font-bold capitalize">
              {project.title}
            </p>
            <p className="text-[#575757] mt-2 mb-5">{project.about}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <button
          onClick={() => router.push("/portfolio")}
          className="bg-transparent border-2 border-palette-primary mb-5 md:mb-0 rounded-[100px] w-fit md:w-auto text-sm md:text-xl capitalize font-semibold text-palette-primary mobile:py-1 mobile:px-4 py-4 px-12"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SectionFive;
