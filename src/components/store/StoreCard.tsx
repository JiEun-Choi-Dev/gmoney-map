import React, { useState } from "react";
import Bedge from "../common/Bedge";
import styled from "styled-components";
import StoreInfo, { StoreInfoProps } from "./StoreInfo";
import media from "../../lib/styles/media";

export type Props = StoreInfoProps & {
  onClick?: () => void;
};

const StoreCard: React.FC<Props> = (props) => {
  const onToggleHandler = () => {
    console.log("ddd");
  };
  return (
    <LayoutStyled onClick={props.onClick}>
      <Bedge index={1}></Bedge>
      <Info {...props} />
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Info = styled(StoreInfo)`
  .use {
    display: none;
  }
`;
export default StoreCard;
