import LoadFirst from "../components/LoadFirst";
import Link from "next/link";

const EmploymentSummary = ({
  company,
  title,
  timeframe,
  description,
}: {
  company: React.ReactNode;
  title?: string;
  timeframe: string;
  description: string;
}) => (
  <div className="border-2 border-green-500 p-2 box-border">
    <div className=" underline">{company}</div>
    <div className="italic">{timeframe}</div>
    {title ? <div className="mt-2">Title: {title}</div> : null}
    <div className="mt-2">{description}</div>
  </div>
);

const Divider = () => <div className="my-2"></div>;

const History = () => {
  return (
    <LoadFirst>
      <main className="w-full h-full flex flex-col justify-evenly">
        <div className="mx-auto w-2/3">
          <EmploymentSummary
            company="Career Break"
            timeframe="June 2022 - now"
            description="Navigated a career break after a layoff into a challenging time in the industry. Focused on personal development and mental health, while working part-time. Actively staying updated with industry trends and continuing professional development."
          />
          <Divider />
          <EmploymentSummary
            company={
              <Link
                href="https://genui.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                GenUI
              </Link>
            }
            timeframe="July 2021 - June 2022 (layoff)"
            title="Lead Developer"
            description="Role: Front end developer and technical lead for front end projects in TypeScript and React. Screened incoming technical applicants."
          />
          <Divider />
          <EmploymentSummary
            company={
              <Link
                href="https://www.linquest.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                The Perduco Group (LinQuest)
              </Link>
            }
            timeframe="June 2018 - June 2021"
            title="Software Engineer"
            description="Role: Full stack developer for DoD contracts in JavaScript, TypeScript, React, Python, and Go."
          />
          <Divider />
          <EmploymentSummary
            company={
              <Link
                href="https://lexisnexisspecialservices.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                LexisNexis Special Services
              </Link>
            }
            timeframe="August 2015 - May 2016, May 2017 - August 2017"
            title="Software Engineering Intern"
            description="Role: Big data processing and full stack development intern. Contributed to backend production code."
          />
        </div>
      </main>
    </LoadFirst>
  );
};

export default History;
