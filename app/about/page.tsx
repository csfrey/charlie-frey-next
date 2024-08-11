"use client";

import LoadFirst from "@/app/components/LoadFirst";
import {
  bio,
  docxDownloadUri,
  hobbies,
  mdDownloadUri,
  mdUri,
} from "@/app/constants";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import style from "./page.module.css";
import DownloadIcon from "../icons/DownloadIcon";

const About = () => {
  const [md, setMd] = useState<any>();

  useEffect(() => {
    async function fetchResumeMd() {
      await fetch(mdUri)
        .then((response) => response.json())
        .then((data) => atob(data.content))
        .then(setMd);
    }

    fetchResumeMd();
  }, []);

  function downloadBlob(blob: Blob, filename: string) {
    // Create blob link to download
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link?.parentNode?.removeChild(link);
  }

  function downloadMd() {
    fetch(mdDownloadUri)
      .then((r) => r.blob())
      .then((blob) => downloadBlob(blob, "charlie_frey.md"));
  }

  function downloadDocx() {
    fetch(docxDownloadUri)
      .then((r) => r.blob())
      .then((blob) => downloadBlob(blob, "charlie_frey.docx"));
  }

  return (
    <LoadFirst>
      <main className="w-full lg:h-full lg:px-36 md:px-36 pb-4 lg:grid lg:grid-cols-2 lg:grid-rows-5 gap-8">
        <fieldset
          className="border-2 border-green-500 p-4 overflow-y-scroll row-span-4"
          style={{
            scrollbarWidth: "thin",
          }}
        >
          <legend>About</legend>
          <p>{bio}</p>
          <p className="mt-4">{hobbies}</p>
        </fieldset>

        <fieldset
          className={`h-full border-2 border-green-500 p-4 overflow-y-scroll row-span-5 ${style.resume}`}
        >
          <legend>Preview: resume.md</legend>
          <Markdown>{md}</Markdown>
        </fieldset>
        <fieldset className="border-2 border-green-500 px-4 flex justify-evenly row-span-1">
          <legend>Downloads</legend>
          <div
            className="cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            onClick={downloadMd}
          >
            <DownloadIcon height="2rem" />
            <div>resume.md</div>
          </div>
          <div
            className="cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            onClick={downloadDocx}
          >
            <DownloadIcon height="2rem" />
            <div>resume.docx</div>
          </div>
        </fieldset>
      </main>
    </LoadFirst>
  );
};

export default About;
