import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100%;
  z-index: 10;
  margin: 0rem auto;
  background-color: rgba(20,20,20, 0.7);

  .pink {
    background-image: radial-gradient(circle, #ffb4e6, #bc83a3, #7b5567, #3e2c33, #000000);
  } 
  .green {
    background-image: radial-gradient(circle, #9afcc4, #71ba91, #4b7c61, #284334, #031109);
  } 
  .blue {
    background-image: radial-gradient(circle, #7b70f5, #006bc3, #005174, #003130, #031109);
    }
  .red {
    background-image: radial-gradient(circle, #ff5a5a, #bd4447, #7f3033, #451d1f, #110303);
    }
  .yellow {
    background-image: radial-gradient(circle, #ffff00, #c3c509, #8b8d0b, #585909, #2a2a00);
    }
  .purple {
    background-image: radial-gradient(circle, #cf5aff, #a041b8, #6f2d77, #3f1b3f, #11030f);
    }
  .white {
    background-image: radial-gradient(circle, #b4b0b0, #848181, #565455, #2d2c2c, #000000);
    }
  .brown {
    background-image: radial-gradient(circle, #7a4444, #613637, #48292a, #311d1d, #1c1010);
    }
  .gray {
    background-image: radial-gradient(circle, #787878, #5e5c5e, #464144, #30282a, #1c1010);
    }
  .black {
    background-image: radial-gradient(circle, #454444, #353434, #252425, #161616, #000000);
    }
    `;

export const PokeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 600px;
  border: 2px solid #d8c974;
  border-radius: 15px;
  background-color: rgba(70, 70, 70, 1);
  box-shadow: inset 0px 15px 30px -1px #000, inset 0px -15px 30px -1px #000;
  transition-duration: 0.25s;
  margin-top: 2rem;

  animation: mymove 0.4s ease-in-out 1 normal;
  @keyframes mymove {
    0% {
      scale: 0;
      transform: rotatey(120deg);
    }
    25% {
      scale: 1.3;
      transform: rotatey(240deg);
    }
    50% {
      scale: 1.7;
      transform: rotatey(360deg);
    }
    75% {
      scale: 1.3;
      transform: rotatey(480deg);
    }
    100% {
      scale: 1;
      transform: rotatey(600deg);
    }
  }
  
  @media screen and (max-height: 600px) {
    position: absolute;
  }
  
  `;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  border-radius: 12px 12px 0px 0px;
  box-shadow: inset 120px 20px 30px -1px #111, inset -130px -20px 30px -1px #111;

  .ID {
    width: 100px;
    height: 20px;
    text-align: center;
    translate: 0rem -1.6rem;
    font-size: var(--fontMed);
    font-weight: bold;
    text-transform: capitalize;
    color: var(--darkGrey);
    padding-bottom: 0.1rem;
    border-radius: 0px 12px 0px 0px;
    background-image: linear-gradient(
      to left bottom,
      #c9bb2b,
      #d1c253,
      #d8c974,
      #ddd094,
      #e1d7b3
    );
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    h3 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      color: lightgrey;
      text-transform: capitalize;
    }
    p {
      font-size: 0.7rem;
      font-weight: bold;
      margin: 0;
    }
  }

  button {
    display: flex;
    background: none;
    border: none;
    margin: 1.5rem 0rem 0rem 1.5rem;
    transform: scale(2);
    transition: 2s;

    :hover {
      background-color: rgba(80, 80, 80, 1);
      border-radius: 4px;
      transform: scale(2);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 280px;
  margin: 0rem auto;
  


  .pokeImage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 280px;
    max-height: 75%;
    border-radius: 50%;
    box-shadow: inset 5px 0px 50px 20px rgba(70, 70, 70, 1),
      inset -5px -0px 50px -1px rgba(70, 70, 70, 1);
    background-image: radial-gradient(
      circle,
      #ffffff,
      #b9b9b9,
      #777777,
      #3b3b3b,
      #000000
    );
  }
  .evolve {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    text-transform: capitalize;
    margin: 0.3rem 0rem;
    padding: 0rem;
  }
  .text {
    font-size: 0.7rem;
    margin: 0.2rem 0rem;
    padding: 0rem;
    text-align: justify;
  }
`;

export const Image = styled.img`
  object-fit: fill;
  width: 100%;
  max-height: 85%;
  padding: 0rem;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;

  h3 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: bold;
    color: Lightgrey;
    width: 100%;
  }

  p {
    font-size: 0.6rem;
    font-weight: bold;
    border-radius: 10px;
    margin: 0.2rem;
    padding: 0.1rem 0.4rem 0.2rem;
    width: 90%;
    text-align: start;
    text-transform: capitalize;
    box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.45);
  }
  .types {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin: 0rem 0rem 0.6rem;
    p {
      font-size: 0.8rem;
      font-weight: bold;
      border-radius: 10px;
      margin: 0rem 0.5rem;
      padding: 0.2rem 0.4rem 0.2rem;
      text-align: center;
      text-transform: capitalize;
      box-shadow: 2.5px 2.5px 0 rgba(0, 0, 0, 0.45);
      width: 30%;
    }
  }
`;

export const GeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  width: 28%;
  border-radius: 10px;
  background-color: rgba(120, 120, 120, 0.3);
  box-shadow: 2.5px 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.45);
  transition: all 0.2s;
  :hover {
    scale: 1.1;
  }
`;

export const Physical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  width: 28%;
  border-radius: 10px;
  background-color: rgba(120, 120, 120, 0.3);
  box-shadow: 2.5px 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.45);
  transition: all 0.2s;
  :hover {
    scale: 1.1;
  }
`;

export const Abilities = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  width: 28%;
  border-radius: 10px;
  background-color: rgba(120, 120, 120, 0.3);
  box-shadow: 2.5px 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.45);
  transition: all 0.5s;
  :hover {
    scale: 1.2;
  }
`;

export const Footer = styled.div`
  p {
    text-decoration: underline;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    font-size: 0.6rem;
    cursor: pointer;
  }
`;
