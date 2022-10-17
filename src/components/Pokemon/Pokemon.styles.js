import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  width: 280px;
  height: 160px;
  border: 2px solid #d8c974;
  border-radius: 15px;
  background-color: rgba(70, 70, 70, 1);
  box-shadow: inset 0px 9px 15px -5px #000, inset 0px -9px 15px -5px #000;
  transition-duration: 0.3s;
  --modalshadow: inset 0px 15px 30px -1px #000, inset 0px -15px 30px -1px #000;
  cursor: pointer;
  .pink {
    background-image: radial-gradient(
      circle,
      #ffb4e6,
      #bc83a3,
      #7b5567,
      #3e2c33,
      #000000
    );
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
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
    box-shadow: var(--modalshadow);
  }

  :hover {
    transform: scale(1.15);
  }

  .pokeImage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 75%;
    margin: 0.5rem 0rem 0.5rem 1.5rem;
    padding: 0.6rem;
    border-radius: 50%;
    box-shadow: inset 0px 0px 20px 10px rgba(70, 70, 70, 1),
      inset -0px -0px 20px -15px rgba(70, 70, 70, 1);
    background-image: radial-gradient(
      circle,
      #aaaaaa,
      #898989,
      #666666,
      #464646,
      #292929
    );
    transition: 0.1s;
  }

  :hover .pokeImage {
    padding: 0rem;
    box-shadow: inset 0px 0px 20px 10px rgba(70, 70, 70, 1),
      inset -0px -0px 20px -15px rgba(70, 70, 70, 1);
    width: 55%;
    height: 80%;
  }
`;
export const Image = styled.img`
  object-fit: scale-down;
  padding: 0rem;
  max-height: 80%;
  max-width: 90%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;
  height: 100%;
  .ID {
    translate: 0rem -1.1rem;
    background-image: linear-gradient(
      to left bottom,
      #c9bb2b,
      #d1c253,
      #d8c974,
      #ddd094,
      #e1d7b3
    );
    color: var(--darkGrey);
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    width: 45%;
    height: 50%;
    border-radius: 0px 9px 0px 0px;
  }
  p {
    font-size: 0.5rem;
    margin: 0.8rem;
    text-transform: capitalize;

    user-select: none;
    :hover {
      cursor: pointer;
    }
  }

  .moreInfo {
    color: lightgrey;
    font-size: 0.5rem;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  h3 {
    color: var(--white);
    font-size: var(--fontMed);
    font-weight: bold;
    padding-left: 0.3rem;
    padding-bottom: 1rem;
    text-transform: capitalize;
    margin: auto;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  p {
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 10px;
    background-color: #0e5faf;
    margin: 0rem 0.2rem;
    padding: 0.2rem 0.4rem 0.2rem;
    text-align: center;
    text-transform: capitalize;
    box-shadow: 2.5px 2.5px 0 rgba(0, 0, 0, 0.45);
  }
`;
