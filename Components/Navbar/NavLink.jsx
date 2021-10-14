import { Link } from "@chakra-ui/react";

const NavLink = ({ children, href, color, fontSize }) => {
  return (
    <Link
      href={href}
      fontSize={fontSize || "18px"}
      fontWeight="bold"
      color={color || "#01036A"}
      _hover={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
