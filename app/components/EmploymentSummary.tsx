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

export default EmploymentSummary;
