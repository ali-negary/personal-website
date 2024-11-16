import React from "react";
import { Section } from "../components/Section";
import HamburgerMenu from "../components/HamburgerMenu";
import BackToTop from "../components/BackToTop";
import {
  Hero as HeroStyle,
  About as AboutStyle,
  Links as LinksStyle,
  Blog as BlogStyle,
  Contact as ContactStyle,
  Footer as FooterStyle,
} from "../styles/LandingPage.styles";

const MyName = import.meta.env.VITE_MY_NAME || "Default Name";

const Hero: React.FC = () => (
  <Section bgColor="#f5f5f5">
    <HeroStyle>
      <h1>Hey! This is {MyName}!</h1>
      <p>Some funny text about you goes here!</p>
      <p>To know more, scroll down 👇</p>
    </HeroStyle>
  </Section>
);

const About: React.FC = () => (
  <Section bgColor="#e3f2fd">
    <AboutStyle>
      <h2>About Me</h2>
      <p>
        I'm {MyName}, a developer passionate about building awesome websites and
        applications. Welcome to my space!
      </p>
    </AboutStyle>
  </Section>
);

// Define the environment variables and default logos
const socialLinks = [
  {
    name: "GitHub",
    handle: import.meta.env.VITE_GITHUB_HANDLE, // GitHub handle
    url: `https://github.com/${import.meta.env.VITE_GITHUB_HANDLE}`,
    logo: "/assets/logos/github.svg",
  },
  {
    name: "LinkedIn",
    handle: import.meta.env.VITE_LINKEDIN_HANDLE, // LinkedIn handle
    url: `https://linkedin.com/in/${import.meta.env.VITE_LINKEDIN_HANDLE}`,
    logo: "/assets/logos/linkedin.svg",
  },
  {
    name: "Instagram",
    handle: import.meta.env.VITE_INSTAGRAM_HANDLE, // Instagram handle
    url: `https://instagram.com/${import.meta.env.VITE_INSTAGRAM_HANDLE}`,
    logo: "/assets/logos/instagram.svg",
  },
  {
    name: "Resume",
    handle: "resume", // Resume doesn't need a dynamic handle
    url: "/resume",
    logo: "/assets/logos/resume.svg",
  },
];

const Links: React.FC = () => {
  return (
    <LinksStyle>
      <h2>Where to Find Me?</h2>
      <div className="links">
        {socialLinks
          .filter((link) => link.handle && link.logo) // Exclude items without a handle or logo
          .map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.logo} alt={link.name} />
            </a>
          ))}
      </div>
    </LinksStyle>
  );
};

const Blog: React.FC = () => (
  <Section bgColor="#fbe9e7">
    <BlogStyle>
      <h2>My Blog</h2>
      <div>
        <h3>Latest Post</h3>
        <p>This is a sample blog post title.</p>
        <a href="/blog">
          <button>See More</button>
        </a>
      </div>
    </BlogStyle>
  </Section>
);

const Contact: React.FC = () => (
  <Section bgColor="#f1f8e9">
    <ContactStyle>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="What do you want to say?" required />
        <button type="submit">Send</button>
      </form>
    </ContactStyle>
  </Section>
);

const Footer: React.FC = () => (
  <FooterStyle>
    <p>Made by MyName - 2024</p>
  </FooterStyle>
);

const LandingPage: React.FC = () => {
  return (
    <div>
      <HamburgerMenu />
      <Hero />
      <About />
      <Links />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default LandingPage;
