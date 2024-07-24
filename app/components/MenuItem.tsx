import Link from "next/link";

const MenuItem = ({
  text,
  href,
  selected = false,
}: {
  text: string;
  href: string;
  selected?: boolean;
}) => {
  return (
    <Link className="text-center hover:underline" href={href}>
      {text}
    </Link>
  );
};

export default MenuItem;
