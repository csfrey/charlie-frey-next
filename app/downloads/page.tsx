"use client";

import Image from "next/image";
import LoadFirst from "@/app/components/LoadFirst";
import DownloadIcon from "@/app/icons/download";
import { useEffect, useState } from "react";
import DocViewer from "@cyntler/react-doc-viewer";
import Markdown from "react-markdown";

const mdUri =
  "https://api.github.com/repos/csfrey/csfrey/contents/documents/resume.md";
const docxUri =
  "https://raw.githubusercontent.com/csfrey/csfrey/main/documents/Charlie%20Frey%20Resume%202024.docx";

const File = ({
  title,
  selected,
  onClick,
}: {
  title: string;
  selected: boolean;
  onClick: any;
}) => (
  <pre className="cursor-pointer flex" onClick={onClick}>
    {title} <div className={selected ? "" : "hidden"}>{"<--"}</div>
  </pre>
);

const Downloads = () => {
  const [fileSelected, setFileSelected] = useState<number>(0);
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

  const files = ["resume.md", "resume.docx"];

  const viewers = [
    <Markdown>{md}</Markdown>,
    <DocViewer
      documents={[
        {
          uri: docxUri,
        },
      ]}
    />,
  ];

  // const downloads = [
  //   () => download
  // ]

  return (
    <LoadFirst>
      <main className="w-full h-full flex justify-evenly">
        <div className="w-1/6 flex flex-col justify-center">
          <fieldset
            id="file-list"
            className="max-h-min border-2 border-green-500 p-4"
          >
            <legend>files</legend>
            <div className="">
              {files.map((file, i) => (
                <File
                  key={i}
                  title={file}
                  selected={fileSelected === i}
                  onClick={() => setFileSelected(i)}
                />
              ))}
            </div>
          </fieldset>
          <div className="text-center mt-20">
            <DownloadIcon height="80px" />
            <div>Download selected</div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-center">
          <fieldset
            id="preview"
            className="h-3/4 min-w-fit border-2 border-green-500 p-4 overflow-y-scroll"
          >
            <legend>preview</legend>
            {viewers[fileSelected]}
          </fieldset>
        </div>
      </main>
    </LoadFirst>
  );
};

export default Downloads;
