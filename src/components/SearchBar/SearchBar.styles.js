import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.2rem;
  max-width: 1660px;
  z-index: 99;
  translate: -45px 0px;

  @media screen and (max-width: 600px) {
    translate: 0px 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.1rem;
  padding: 0 5px;
  align-items: center;

  input {
    background-color: lightgrey;
    padding: 10px;
    box-shadow: 0px 2px 2px RGB(0, 0, 0, 0.25);
    border-radius: 3px;
    border: none;
    width: 150px;
  }

  @media screen and (max-width: 600px) {
    input {
      height: 25px;
    }
    h2 {
       display: none;
    }
  }
`;
