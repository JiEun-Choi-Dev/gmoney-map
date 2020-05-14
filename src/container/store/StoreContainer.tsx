import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Location from "../location/Location";
import SearchBox from "../common/SearchBox";
import { IoMdCafe, IoIosMedkit } from "react-icons/io";
import { MdShoppingBasket, MdMovieCreation } from "react-icons/md";
import { FaStore, FaHamburger } from "react-icons/fa";
import StoreList from "../store/StoreList";
import media from "../../lib/styles/media";
import { withRouter, useRouter } from "next/router";
import Link from "../../lib/utility/ActiveLink";
import { useDispatch, useSelector } from "react-redux";
import { shopPopStore } from "../../module/global";
import { RootState } from "../../module";
import { WithRouterProps } from "next/dist/client/with-router";
import ShopAPI from "../../api/ShopAPI";
import { IShopDocument } from "../../server/shop/shop.interface";

type Props = {};

const StoreContainer: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <LayoutStyled>
      <Header />
      <Content>
        <Location />
        <SearchBox />
      </Content>
      <hr />
      <Content>
        <div className="title">
          <p>주변탐색</p>
        </div>
        <FranLayout>
          <Tab className={router.pathname == "/" ? "active" : ""}>
            <Link activeClassName="active" href={{ query: { cate: "1" } }}>
              <a className="btn_con">
                <CircleButton>
                  <FaHamburger size="20" color="#fff" />
                </CircleButton>
                <p>음식점</p>
              </a>
            </Link>
          </Tab>
          <Tab className={router.pathname == "/" ? "active" : ""}>
            <Link activeClassName="active" href={{ query: { cate: "2" } }}>
              <a className="btn_con">
                <CircleButton>
                  <IoMdCafe size="20" color="#fff" />
                </CircleButton>
                <p>카페</p>
              </a>
            </Link>
          </Tab>
          <Tab className={router.pathname == "/" ? "active" : ""}>
            <Link activeClassName="active" href={{ query: { cate: "3" } }}>
              <a className="btn_con">
                <CircleButton>
                  <FaStore size="20" color="#fff" />
                </CircleButton>
                <p>생활편의</p>
              </a>
            </Link>
          </Tab>
          <Tab className={router.pathname == "/" ? "active" : ""}>
            <Link activeClassName="active" href={{ query: { cate: "4" } }}>
              <a className="btn_con">
                <CircleButton>
                  <MdShoppingBasket size="20" color="#fff" />
                </CircleButton>
                <p>마트/편의점</p>
              </a>
            </Link>
          </Tab>
          <Tab className={router.pathname == "/" ? "active" : ""}>
            <Link activeClassName="active" href={{ query: { cate: "5" } }}>
              <a className="btn_con">
                <CircleButton>
                  <IoIosMedkit size="20" color="#fff" />
                </CircleButton>
                <p>병원/약국</p>
              </a>
            </Link>
          </Tab>
          <Tab className={router.pathname == "/" ? "active" : ""}>
            <Link activeClassName="active" href={{ query: { cate: "6" } }}>
              <a className="btn_con">
                <CircleButton>
                  <MdMovieCreation size="20" color="#fff" />
                </CircleButton>
                <p>문화/교육</p>
              </a>
            </Link>
          </Tab>
        </FranLayout>
      </Content>
      <hr />
      <Content>
        <div className="result">
          <p>
            내 주변 <span>10</span> 개
          </p>
        </div>
        <StoreList />
      </Content>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  width: 380px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  z-index: 999;
  box-shadow: 1px 1px 22px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  ${media.small} {
    display: none;
  }
`;
const Content = styled.div`
  padding: 3%;
  box-sizing: border-box;
  p {
    margin: 0 0 10px;
  }
  .title {
    margin: 0 0 10px;
    color: #676767;
    font-size: 1rem;
  }
  .result {
    text-align: left;
    font-size: 0.8rem;
    color: #cecece;
    span {
      color: #10b592;
      font-weight: bold;
    }
  }
`;

const FranLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .btn_con {
    width: 30%;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  p {
    margin: 0;
    font-size: 0.7rem;
    color: #10b592;
    font-weight: 600;
  }
`;

const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(133.04deg, #005dac 3.19%, #10b592 100%);
  border: none;
  color: #fff;
`;
const Tab = styled.div`
  width: 30%;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export default StoreContainer;
