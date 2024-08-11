import Link from "next/link";

const MenuItem = ({
  text,
  href,
  target,
}: {
  text: string;
  href: string;
  target?: string;
}) => {
  return (
    <Link target={target} className="text-center hover:underline" href={href}>
      {text}
    </Link>
  );
};

export default MenuItem;
