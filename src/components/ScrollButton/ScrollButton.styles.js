import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  top: 25vh;
  z-index: 25;
  opacity: 0.5;
  cursor: pointer;
  scale: 0.8;
  @media screen and (max-width: 600px) {
    position: absolute;
    top:5vh;
    left: 80vw;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(170, 170, 170, 0.6);
  border-radius: 10px;
  width: 40px;
  padding: 0.1rem;
  margin: 0.2rem 2rem;
  :hover {
    scale: 1.15;
  }
`;
export const Text = styled.div`
  text-decoration: none;
  color: white;
`;
