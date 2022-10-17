import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1660px;
        --breakWidth: 768px;
        --white: #fff;
        --lightGrey: #eee;
        --medBlue: #0e5faf;
        --darkGrey: #212121;
        --fontSuperBig: 2rem;
        --fontBig: 1.2rem;
        --fontMed: 1rem;
        --fontSmall: 0.8rem;
        background-color: var(--darkGrey);
        user-select: none;

    }

    *{
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif
    }
    

    img .backPhoto{
        opacity: 0.1;
        z-index: 1;
        position: absolute;
        width: 50px;
    }

    .not-found-text{
        color: var(--lightGrey);
        font-weight: bold;
        text-align: center;
    }
    input{
        display: flex;
        margin: 10px auto;
        padding: 0.2rem;
        background-color: rgba(250, 250, 250, 0.7);
        width: 40px;
        color: rgba(55, 55, 55, 1);
        text-align: center;
    }

    body{
        margin: 0;
        padding: 0;

        h1{
            display: flex;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--white);
            margin: auto;
        }
        h2{
            display: flex;
            justify-content: center;
            font-size: 1rem;
            font-weight: 600;
            color: var(--white);
            margin: auto;
        }
        h3{
            font-size: 0.8rem;
            font-weight: 600;
            text-decoration: none;
        }
        p{
            font-size: 0.6rem;
            color: var(--white);
        }
    
    } 

    .none {
    background-image: linear-gradient(to left bottom, #ffffff, #eeeeee, #dddddd, #cccccc, #bcbcbc);
    color: black;
    width: 150px;
  }
  .normal {
    background-image: linear-gradient(to left bottom, #ffffff, #eeeeee, #dddddd, #cccccc, #bcbcbc);
    color: black;
    width: 65px;
  }
  .fire {
    background-image: linear-gradient(to left bottom, #ffff00, #eca521, #b05d34, #5b2c2b, #000000);
    color: white;
    width: 65px;
  }
  .grass {
    background-image: linear-gradient(to left bottom, #00ff01, #13c224, #1e8828, #1f5122, #172017);
    color: white;
    width: 65px;
  }
  .poison {
    background-image: linear-gradient(to left bottom, #b500ff, #891bbd, #5f1f7f, #371a46, #120f13);
    color: white;
    width: 65px;
  }
  .water {
    background-image: linear-gradient(to right top, #1500ff, #006aff, #008eee, #1aa6c4, #afb4b4);
    color: white;
    width: 65px;
  }
  .bug {
    background-image: linear-gradient(to right top, #b1d900, #9ec93a, #8fb853, #84a763, #7d956f);
    color: white;
    width: 65px;
  }
  .fairy {
    background-image: linear-gradient(to right top, #e562ba, #e880c5, #ea9cd0, #ecb6da, #edcfe3);
    color: white;
    width: 65px;
  }
  .flying {
    background-image: linear-gradient(to right top, #00d5ff, #62d0e9, #88cad6, #a4c4c7, #bbbcbc);
    color: white;
    width: 65px;
  }
  .ground {
    background-image: linear-gradient(to right top, #6e0909, #6e1f1c, #6b2e2c, #663c3b, #5f4848);
    color: white;
    width: 65px;
  }
  .fighting {
    background-image: linear-gradient(to left bottom, #c4c4ca, #908f94, #5e5e61, #313132, #030303);
    color: white;
    width: 65px;
  }
  .psychic {
    background-image: linear-gradient(to left bottom, #c4cc0c, #a2a821, #828528, #63642a, #454529);
    color: white;
    width: 65px;
  }
  .electric {
    background-image: linear-gradient(to right top, #d5df06, #dfe553, #e7ea7f, #eff0a7, #f5f5ce);
    color: black;
    width: 65px;
  }
  .rock {
    background-image: linear-gradient(to left bottom, #a39f9f, #979090, #8b8181, #807272, #746464);
    color: white;
    width: 65px;
  }
  .steel {
    background-image: linear-gradient(to left bottom, #c4c4ca, #a6a8ad, #8a8d90, #707373, #585959);
    color: white;
    width: 65px;
  }
  .ghost {
    background-image: radial-gradient(circle, #d923d9, #af1aaf, #871187, #610861, #3d033d);
    color: white;
    width: 65px;
  }
  .ice {
    background-image: radial-gradient(circle, #c4c4ca, #aeb8c9, #8daec6, #64a5bd, #2d9dab);
    color: white;
    width: 65px;
  }
  .dragon {
    background-image: linear-gradient(to right top, #036611, #1c5a1f, #274e28, #2e422e, #333633);
    color: white;
    width: 65px;
  }
  .dark {
    background-image: radial-gradient(circle, #626262, #494949, #323232, #1c1c1c, #000000);
    color: darkgrey;
    width: 65px;
  }
  .unknown {
    background-image: radial-gradient(circle, #ffffff, #eeeeee, #dddddd, #cccccc, #bcbcbc);
    color: black;
    width: 65px;
  }
  .shadow {
    background-image: radial-gradient(circle, #3f3f3f, #303030, #222222, #151515, #000000);
    color: darkgrey;
    width: 65px;
  }
`;
