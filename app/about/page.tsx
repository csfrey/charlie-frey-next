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
import DownloadIcon from "@/app/icons/download";

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
      <main className="w-full h-full flex flex-col justify-center p-4">
        <div className="h-full flex justify-evenly">
          <div className="left-side w-5/12 flex flex-col justify-between">
            <fieldset className="h-4/6 border-2 border-green-500 p-4">
              <legend>About</legend>
              <p>{bio}</p>
              <p className="mt-4">{hobbies}</p>
            </fieldset>
            <fieldset className="h-1/5 border-2 border-green-500 p-4 flex justify-evenly">
              <legend>Downloads</legend>
              <div
                className="cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                onClick={downloadMd}
              >
                <DownloadIcon height="60px" />
                <div>resume.md</div>
              </div>
              <div
                className="cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                onClick={downloadDocx}
              >
                <DownloadIcon height="60px" />
                <div>resume.docx</div>
              </div>
            </fieldset>
          </div>
          <div className="right-side w-5/12">
            <fieldset
              className={`h-full border-2 border-green-500 p-4 overflow-y-scroll ${style.resume}`}
            >
              <legend>resume.md</legend>
              <Markdown>{md}</Markdown>
            </fieldset>
          </div>
        </div>
      </main>
    </LoadFirst>
  );
};

export default About;
