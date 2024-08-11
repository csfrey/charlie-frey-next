import Link from "next/link";
import LoadFirst from "../components/LoadFirst";
import Divider from "../components/Divider";
// import ampedUp from "../images/amped-up.jpeg";

type ProjectT = {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tech: string;
  image: string;
  link: string;
};

const projects: Array<ProjectT> = [
  {
    title: "ReactMobile",
    subtitle: "GenUI (2021-2022)",
    description:
      "Flexible, panic button-based safety suite for hospitality workers",
    role: "Front-end technical lead",
    tech: "React, TypeScript, Elixir, Pusher API",
    image: "/images/reactmobile.jpeg",
    link: "https://www.reactmobile.com",
  },
  {
    title: "HAL GUI",
    subtitle: "The Perduco Group (2021)",
    description:
      "Front-end UI for a machine learning harness for complex, high-dimensional data analysis",
    role: "Full-stack engineer, project lead",
    tech: "React, TypeScript, Go, MySQL",
    image: "/images/hal-03.jpg",
    link: "https://www.linquest.com/products-and-solutions/hal",
  },
  {
    title: "AMPED-UP",
    subtitle: "The Perduco Group (2019-2021)",
    description: "Advanced mission planning web app for the DoD/US Air Force",
    role: "Front-end engineer",
    tech: "React, JavaScript, CesiumJS, Java",
    image: "/images/amped-up.jpeg",
    link: "https://www.linquest.com/products-and-solutions/amped-up",
  },
  {
    title: "Password Generator",
    subtitle: "Personal Project (2024)",
    description:
      "Simple password generator exercise as part of learning Angular",
    role: "Front-end engineer",
    tech: "Angular, TypeScript",
    image: "/images/password-generator.jpeg",
    link: "",
  },
  {
    title: "Moody - Mood Tracker (WIP)",
    subtitle: "Personal Project (2024)",
    description: "Mood tracking and journaling app",
    role: "Full-stack engineer",
    tech: "NextJS, React, MongoDB",
    image: "/images/moody.jpeg",
    link: "",
  },
  {
    title: "Library of the Leviathan (WIP)",
    subtitle: "Personal Project (2024)",
    description:
      "D&D catalog webapp leveraging OpenAI for ingestion and summarization",
    role: "Full-stack engineer",
    tech: "NextJS, React, MongoDB, Python, AWS",
    image: "/images/lotl.jpeg",
    link: "",
  },
];

const Project = ({ project, key }: { project: ProjectT; key: string }) => {
  const { title, subtitle, description, role, tech, image, link } = project;

  return (
    <Link
      key={key}
      href={link}
      target="_blank"
      className="grid grid-cols-3 gap-4 border-2 border-green-500 hover:border-green-300 p-2"
    >
      <img src={image} className="object-cover" />
      <div className="project-text-wrapper col-span-2 grid grid-cols-1 auto-rows-auto gap-2">
        <div className="underline">{title}</div>
        <div className="">{subtitle}</div>
        <div className="">Role: {role}</div>
        <div className="">Tech: {tech}</div>
        <div className="">Summary: {description}</div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <LoadFirst>
      <main className="w-full h-full flex flex-col justify-evenly">
        <h1 className="text-2xl">Projects</h1>
        <div className="projects-container grid auto-rows-auto lg:grid-cols-2 gap-4 py-4">
          {projects.map((project, i) => (
            <Project project={project} key={`project-${i}`} />
          ))}
        </div>
      </main>
    </LoadFirst>
  );
};

export default Projects;
