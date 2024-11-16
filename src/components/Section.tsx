import React from "react";
import styled from "styled-components";

interface SectionProps {
  bgColor: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ bgColor, children }) => {
  return <StyledSection $bgColor={bgColor}>{children}</StyledSection>;
};

const StyledSection = styled.section<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;
