import React, { useState } from "react";
//Styles
import { Wrapper, Content, Text } from "./ScrollButton.styles";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleBottom, setVisibleBottom] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled <= 0) {
      setVisibleTop(false);
    } else {
      setVisibleTop(true);
    }
    const calcHeight = document.body.clientHeight-1000
    if (scrolled <= calcHeight) {
      setVisibleBottom(true);
    } else {
      setVisibleBottom(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollBottom = (e) => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Wrapper>
        {visibleTop && (
          <Content onClick={scrollTop}>
              <Text>Top</Text>
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              size="2x"
              color="white"
            />
          </Content>
        )}
        {visibleBottom && (
          <Content onClick={scrollBottom}>
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              size="2x"
              color="white"
            />
            <Text>End</Text>
          </Content>
        )}
      </Wrapper>
    </>
  );
};

export default ScrollButton;
