import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface ActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "blue"
};

const ActiveLink: React.FC<ActiveLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <>
      <Link legacyBehavior href={href} passHref>
        <a style={isActive ? style : {}}> {text} </a>
      </Link>
    </>
  );
};

export default ActiveLink;
