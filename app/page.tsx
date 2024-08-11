import { charlie, codewars, github, linkedIn, medium } from "@/app/constants";
import LoadFirst from "./components/LoadFirst";
import MenuItem from "./components/MenuItem";

export default function Home() {
  return (
    <LoadFirst>
      <main className="w-full h-full flex flex-col justify-evenly">
        <div className="mx-auto">
          <pre>{charlie}</pre>
          <div className="text-center">
            Crafting the next generation of software solutions
          </div>
          <div className="mx-auto mt-4 flex flex-col text-center">
            <MenuItem text="About" href="/about" />
            {/* <MenuItem text="Contact" href="/contact" /> */}
            <MenuItem text="Projects" href="/projects" />
            <MenuItem text="Medium" href={medium} target="_blank" />
            <MenuItem text="LinkedIn" href={linkedIn} target="_blank" />
            <MenuItem text="GitHub" href={github} target="_blank" />
            <MenuItem text="CodeWars" href={codewars} target="_blank" />
          </div>
        </div>
      </main>
    </LoadFirst>
  );
}
