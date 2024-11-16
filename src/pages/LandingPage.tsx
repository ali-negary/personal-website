import React from "react";
import { Link } from "react-router-dom";
import { Container, Links } from "../styles/LandingPage.styles";

const LandingPage: React.FC = () => (
  <Container>
    <h1>Welcome to My Website</h1>
    <p>Select a section to explore:</p>
    <Links>
      <Link to="/resume">Resume</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </Links>
  </Container>
);

export default LandingPage;
