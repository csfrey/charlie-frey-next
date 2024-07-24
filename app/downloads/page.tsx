import Image from "next/image";
import LoadFirst from "../components/LoadFirst";
import Download from "@/app/icons/download.svg";

const Downloads = () => {
  return (
    <LoadFirst>
      <main className="w-full h-full flex flex-col justify-evenly">
        <div className="mx-auto">
          <Download />
        </div>
      </main>
    </LoadFirst>
  );
};

export default Downloads;
