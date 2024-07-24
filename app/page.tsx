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
            <MenuItem text="Work History" href="/history" />
            <MenuItem text="Projects" href="/projects" />
            <MenuItem text="Downloads" href="/downloads" />
            <MenuItem text="Contact" href="/contact" />
          </div>
        </div>
      </main>
    </LoadFirst>
  );
}
