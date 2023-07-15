import { HiArrowLeft } from "react-icons/hi";
import { FC } from "react";
import { BackLinkProps } from "types/types";
import { StyledLink } from "./BackLink.styled";

const BackLink: FC<BackLinkProps> = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
export default BackLink;
