import React, { useState, useEffect } from "react";
import { Wrapper, HamburgerIcon, Menu } from "../styles/HamburgerMenu.styles";

const HamburgerMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Controls visibility of the menu icon
  const [isOpen, setIsOpen] = useState(false); // Controls whether the menu is open or closed

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false); // Hide menu icon when scrolling down
        setIsOpen(false); // Ensure menu is closed when scrolling down
      } else {
        setIsVisible(true); // Show menu icon when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper $isVisible={isVisible}>
      {/* Hamburger Icon */}
      <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </HamburgerIcon>

      {/* Dropdown Menu */}
      <Menu $isOpen={isOpen}>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About Me
        </a>
        <a href="#blog" onClick={() => setIsOpen(false)}>
          Blog
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <a href="/resume" onClick={() => setIsOpen(false)}>
          Resume
        </a>
      </Menu>
    </Wrapper>
  );
};

export default HamburgerMenu;
