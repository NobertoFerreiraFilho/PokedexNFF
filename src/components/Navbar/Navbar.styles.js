import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: center;
  top: 0vh;
  width: 100%;
  margin: auto;
  z-index: 20;
  background-color: rgba(10, 20, 40, 1);
  box-shadow: inset 20px 10px 70px 20px rgba(0, 0, 0, 0.5),
    inset -30px -30px 70px -20px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1660px;
  height: 120px;
  margin: auto;


  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }
`;

export const ContentLogo = styled.div`
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  img {
    height: 80px;
    margin: 0rem;
  }

  p {
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin: 0rem;
  }

  @media screen and (max-width: 600px) {
    margin: 0rem;
    justify-content: flex-start;
    height: 100%;

    img {
      height: 55px;
    }

    p {
      font-size: 0.5rem;
    }
  }
`;

export const GitButton = styled.button`
  padding: 0.5rem;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgba(0, 150, 220, 0.8);
  @media screen and (max-width: 600px) {
    scale: 0.85;
  }
`;
