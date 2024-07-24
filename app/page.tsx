import { codewars, github, linkedIn } from "@/app/constants";
import LoadFirst from "./components/LoadFirst";
import MenuItem from "./components/MenuItem";

const andy = `
 █████╗ ███╗   ██╗██████╗ ██╗   ██╗    ███████╗██████╗ ███████╗██╗   ██╗
██╔══██╗████╗  ██║██╔══██╗╚██╗ ██╔╝    ██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝
███████║██╔██╗ ██║██║  ██║ ╚████╔╝     █████╗  ██████╔╝█████╗   ╚████╔╝ 
██╔══██║██║╚██╗██║██║  ██║  ╚██╔╝      ██╔══╝  ██╔══██╗██╔══╝    ╚██╔╝  
██║  ██║██║ ╚████║██████╔╝   ██║       ██║     ██║  ██║███████╗   ██║   
╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝    ╚═╝       ╚═╝     ╚═╝  ╚═╝╚══════╝   ╚═╝   `;

const charlie = `
 ██████╗██╗  ██╗ █████╗ ██████╗ ██╗     ██╗███████╗    ███████╗██████╗ ███████╗██╗   ██╗
██╔════╝██║  ██║██╔══██╗██╔══██╗██║     ██║██╔════╝    ██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝
██║     ███████║███████║██████╔╝██║     ██║█████╗      █████╗  ██████╔╝█████╗   ╚████╔╝ 
██║     ██╔══██║██╔══██║██╔══██╗██║     ██║██╔══╝      ██╔══╝  ██╔══██╗██╔══╝    ╚██╔╝  
╚██████╗██║  ██║██║  ██║██║  ██║███████╗██║███████╗    ██║     ██║  ██║███████╗   ██║   
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚══════╝   ╚═╝   
 
`;

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
            <MenuItem text="Contact" href="/contact" />
            <MenuItem text="LinkedIn" href={linkedIn} />
            <MenuItem text="GitHub" href={github} />
            <MenuItem text="CodeWars" href={codewars} />
          </div>
        </div>
      </main>
    </LoadFirst>
  );
}
