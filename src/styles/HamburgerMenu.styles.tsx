import styled from "styled-components";

// Wrapper for the entire menu and icon
export const Wrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(-100%)"};
  transition: all 0.3s ease-in-out;
`;

// Hamburger Icon Styling
export const HamburgerIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
  }
`;

// Dropdown Menu Styling
export const Menu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)}; /* Start hidden */
  pointer-events: ${(props) =>
    props.$isOpen ? "auto" : "none"}; /* Disable interaction when closed */
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  a {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    color: #333;
  }
`;
