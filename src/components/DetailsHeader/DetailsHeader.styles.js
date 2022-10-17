import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(70, 70, 70, 1);
  box-shadow: inset 0px 15px 30px -1px #000, inset 0px -15px 30px -1px #000;
  color: white;
  width: 90vw;
  height: 100%;
  padding: 1.5rem;
  max-width: 1660px;
  min-width: 950px;
  margin: 1rem auto;

  .pokeButtons {
    display: flex;
    justify-content: space-between;
    position: sticky;
  }

  .pink {
    background-image: radial-gradient(
      circle,
      #ffb4e6,
      #bc83a3,
      #7b5567,
      #3e2c33,
      #000000
    );
  }
  .green {
    background-image: radial-gradient(
      circle,
      #9afcc4,
      #71ba91,
      #4b7c61,
      #284334,
      #031109
    );
  }
  .blue {
    background-image: radial-gradient(
      circle,
      #7b70f5,
      #006bc3,
      #005174,
      #003130,
      #031109
    );
  }
  .red {
    background-image: radial-gradient(
      circle,
      #ff5a5a,
      #bd4447,
      #7f3033,
      #451d1f,
      #110303
    );
  }
  .yellow {
    background-image: radial-gradient(
      circle,
      #ffff00,
      #c3c509,
      #8b8d0b,
      #585909,
      #2a2a00
    );
  }
  .purple {
    background-image: radial-gradient(
      circle,
      #cf5aff,
      #a041b8,
      #6f2d77,
      #3f1b3f,
      #11030f
    );
  }
  .white {
    background-image: radial-gradient(
      circle,
      #b4b0b0,
      #848181,
      #565455,
      #2d2c2c,
      #000000
    );
  }
  .brown {
    background-image: radial-gradient(
      circle,
      #7a4444,
      #613637,
      #48292a,
      #311d1d,
      #1c1010
    );
  }
  .gray {
    background-image: radial-gradient(
      circle,
      #787878,
      #5e5c5e,
      #464144,
      #30282a,
      #1c1010
    );
  }
  .black {
    background-image: radial-gradient(
      circle,
      #454444,
      #353434,
      #252425,
      #161616,
      #000000
    );
  }
  @media (max-width: 900px) {
    min-width: 450px;
  }

  /*   animation: mymove 0.4s ease-in-out 1 normal forwards;
  @keyframes mymove {
    0% {

      transform: translate(0vw, 0px);
    }
    25% {
      transform: translate(-25vw, 0px);
    }
    50% {
      transform: translate(-50vw, 0px);
    }
    75% {
      transform: translate(-75vw, 0px);
    }
    100% {
      transform: rotatey(-150vw, 0px);
    }
  } */
`;

export const GeneralInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  .Photo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
  }

  .flavor-text {
    font-size: 0.9rem;
    line-height: 2rem;
    width: 100%;
    max-width: 350px;
    padding: 0.3rem 0.7rem;
    margin: 0.5rem 0rem;
    border-radius: 15px;
    background-color: rgba(80, 80, 80, 1);
    box-shadow: inset 0px 15px 70px -1px #222, inset 0px -15px 70px -1px #222;
    text-align: left;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-width: 300px;
  }
`;

export const ShowcaseTop = styled.div`
  min-width: 280px;
  margin: 1.5rem;

  .photoButtons {
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 300px;
  max-height: 300px;
  border-radius: 40%;
  object-fit: fill;
  padding: 0.6rem;
  box-shadow: inset 0px 0px 20px 20px rgba(70, 70, 70, 1),
    inset -0px -0px 20px -1px rgba(70, 70, 70, 1);
  background-image: radial-gradient(
    circle,
    #ffffff,
    #b9b9b9,
    #777777,
    #3b3b3b,
    #000
  );
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .name {
    display: flex;
    text-transform: capitalize;
    margin: 0.5rem;
    font-size: 2rem;
  }

  .id {
    display: flex;
    text-transform: capitalize;
    font-size: 2rem;
    margin: 0.5rem;
  }
`;

export const Showcase = styled.div`
  min-width: 280px;
  max-width: 400px;
  font-size: 1rem;

  p {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .flavorHeader {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const Text = styled.div`
  display: flex;
  p {
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: capitalize;
  }
  .Types {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Types p {
    text-align: center;
    margin: 0rem 1rem;
    width: 20%;
    min-width: 90px;
    border-radius: 10px;
    background-color: rgba(230, 230, 230, 0.5);
    box-shadow: 2.5px 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.45);
  }

  .otherInfos {
    display: flex;
    justify-content: space-evenly;
    margin: 0rem;
  }
`;

export const Abilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  p {
    margin: 0rem 0.2rem;
    width: 20%;
    min-width: 80px;
    border-radius: 10px;
    background-color: rgba(230, 230, 230, 0.5);
    box-shadow: 2.5px 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.45);
  }
  div {
    display: flex;
  }
`;

export const Content = styled.div`
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ShowcaseSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.5rem;
`;

export const FightInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0.1rem;
  border-radius: 15px;
  background-color: rgba(70, 70, 70, 1);
  box-shadow: inset 0px 15px 70px -1px #000, inset 0px -15px 70px -1px #000;
  width: 100%;
  min-width: 180px;
  max-width: 380px;
  height: 50%;
  max-height: 170px;
  transition: all 0.2s;
  :hover {
    scale: 1.1;
  }

  div {
    width: 30%;
  }

  .title {
    font-size: 0.7rem;
    font-weight: bold;
    border-radius: 10px;
    margin: 0.2rem;
    padding: 0.1rem 0.2rem 0.2rem;
    width: 90%;
    text-align: start;
    text-transform: capitalize;
    text-align: center;
  }
  .data {
    font-size: 0.8rem;
    font-weight: bold;
    color: darkgray;
    border-radius: 10px;
    margin: 0.2rem;
    padding: 0.1rem 0.4rem 0.2rem;
    width: 90%;
    text-align: start;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const PhysicalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0.1rem;
  border-radius: 15px;
  background-color: rgba(70, 70, 70, 1);
  box-shadow: inset 0px 15px 70px -1px #000, inset 0px -15px 70px -1px #000;
  width: 100%;
  min-width: 180px;
  max-width: 380px;
  height: 50%;
  max-height: 170px;
  transition: all 0.2s;
  :hover {
    scale: 1.1;
  }

  div {
    width: 30%;
  }

  .title {
    font-size: 0.7rem;
    font-weight: bold;
    border-radius: 10px;
    margin: 0.2rem;
    padding: 0.1rem 0.2rem 0.2rem;
    width: 90%;
    text-align: start;
    text-transform: capitalize;
    text-align: center;
  }
  .data {
    font-size: 0.8rem;
    font-weight: bold;
    color: darkgray;
    border-radius: 10px;
    margin: 0.2rem;
    padding: 0.1rem 0.4rem 0.2rem;
    width: 90%;
    text-align: start;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const ShowcaseBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TypeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .Strenght,
  .weakness {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 450px;
    min-height: 380px;
    margin: 0rem 0.5rem;
    @media screen and (max-width: 900px) {
      min-height: 100%;
    }
    .TypeDetails {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      margin: 0.1rem;
      width: 100%;
      min-height: 210px;
      border-radius: 15px;
      background-color: rgba(80, 80, 80, 1);
      box-shadow: inset 0px 15px 70px -1px #222, inset 0px -15px 70px -1px #222;
      h4 {
        margin: 0.1rem;
        text-transform: capitalize;
        align-self: center;
      }
      .typeData {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0rem 0.1rem 1rem;
        padding: 0rem 0.2rem;
        h5 {
          font-size: 0.7rem;
        }
      }
      @media screen and (max-width: 900px) {
        min-height: 100%;
      }
    }

    @media screen and (max-width: 1100px) {
      width: 400px;
    }
    @media screen and (max-width: 1000px) {
      width: 380px;
    }
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  p {
    font-size: 0.6rem;
    font-weight: bold;
    border-radius: 10px;
    margin: 0.2rem 0.3rem;
    padding: 0.1rem;
    text-align: center;
    text-transform: capitalize;
    box-shadow: 2.5px 2.5px 0 rgba(0, 0, 0, 0.45);
    width: 60px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    min-width: 300px;
  }
`;
