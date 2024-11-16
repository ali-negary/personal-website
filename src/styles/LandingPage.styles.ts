import styled from "styled-components";

export const Hero = styled.div`
  text-align: center;
  padding: 100px 20px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

export const About = styled.div`
  text-align: center;
  padding: 50px 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

export const Links = styled.div`
  text-align: center;
  padding: 50px 20px;

  .links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.1); /* Slight zoom on hover */
      filter: brightness(1.2); /* Brighten the icon on hover */
    }
  }

  button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const Blog = styled.div`
  text-align: center;
  padding: 50px 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #218838;
    }
  }
`;

export const Contact = styled.div`
  text-align: center;
  padding: 50px 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input,
  textarea {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #ffc107;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0a800;
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
