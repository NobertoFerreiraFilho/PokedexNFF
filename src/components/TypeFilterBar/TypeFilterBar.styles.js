import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem auto;
  max-width: 770px;
.none{
  display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 20px;
      border: none;
      border-radius: 10px;
      padding: 0.2rem 0.4rem 0.2rem;
      font-size: 0.6rem;
      font-weight: bold;
      text-align: center;
      text-transform: capitalize;
      transition: all 0.2s;
      user-select: none;
      :hover{
          scale: 0.8;
          box-shadow: 0px 0px 8px rgba(150, 150, 150, 1);
          cursor: pointer;
      }
}

`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0rem auto 0.5rem;

  button {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 20px;
      border: none;
      border-radius: 10px;
      margin: 0.3rem;
      padding: 0.2rem 0.4rem 0.2rem;
      font-size: 0.6rem;
      font-weight: bold;
      text-align: center;
      text-transform: capitalize;
      transition: all 0.2s;
      user-select: none;
      :hover{
          scale: 0.8;
          box-shadow: 0px 0px 8px rgba(150, 150, 150, 1);
          cursor: pointer;
      }
  }
`;
