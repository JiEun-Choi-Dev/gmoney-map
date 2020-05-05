import React, { useState } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";

type Props = {};

const FloatMenu: React.FC<Props> = (props) => {
  const [state, setState] = useState({ visible: false });
  const handleClick = () => {
    setState({ visible: !state.visible });
  };
  return (
    <>
      <LayoutStyled>
        <Content>
          <div className="store">
            주변음식점 <span>4</span> 개
          </div>
          <div>|</div>
          <div onClick={handleClick}>리스트로보기 ></div>
        </Content>
      </LayoutStyled>
    </>
  );
};

const LayoutStyled = styled.div`
  z-index: 200;
  width: 90%;
  padding: 4%;
  border-radius: 5px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${media.small} {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  color: #676767;
  font-size: 0.9rem;
  .store > span {
    color: #005dac;
  }
`;

export default FloatMenu;
