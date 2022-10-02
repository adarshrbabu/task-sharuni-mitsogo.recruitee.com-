import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import Refferer from "./Refferer";
import Profile from "./Profile";
import ProductVideo from "./ProductVideo";
import { useSelector } from "react-redux";
import Users from "./Users";
import ProfileList from "./ProfileList";
import Videos from "../screens/Videos";

function Spotlight() {
    const { user, setUser } = useSelector((state) => state.sample);

    return (
        <Container>
            {user ? <Users /> : null}
            {setUser ? <ProfileList /> : null}

            <Topsection>
                <h2>Overview</h2>
                <button>
                    Add Funds
                    <span>
                        <AiOutlinePlus
                            style={{ width: "20px", height: "20px" }}
                        />
                    </span>
                </button>
            </Topsection>
            <BottomSection>
                <Letf>
                    <LeftTop>
                        <LineGraph />
                        <PieChart />
                    </LeftTop>
                    <LeftBottom>
                        <Refferer />
                        <Videos />
                    </LeftBottom>
                </Letf>
                <Right>
                    <RightTop>
                        <Profile />
                    </RightTop>
                    <RightBottom>
                        <ProductVideo />
                    </RightBottom>
                </Right>
            </BottomSection>
        </Container>
    );
}

export default Spotlight;
const Container = styled.div`
    padding-top: 20px;
    position: relative;
`;
const Topsection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        font-size: 20px;
    }
    button {
        border: none;
        background-color: #6763e3;
        padding: 7px 10px;
        color: #fff;
        font-size: 13px;
        display: flex;
        align-items: center;
        border-radius: 7px;
        cursor: pointer;
    }
    span {
        display: inline-block;
        background-color: #514ddc;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`;
const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media all and (max-width: 1080px) {
        flex-direction: column;
        flex-direction: column-reverse;
    }
`;
const Letf = styled.div`
    width: 65%;
    flex-direction: column;

    display: inline-flex;
    @media all and (max-width: 1280px) {
        width: 67%;
    }
    @media all and (max-width: 1080px) {
        width: 100%;
    }

    /* @media all and (max-width: 120px) {
        width: 67%;
    } */
`;
const LeftTop = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1080px) {
        flex-direction: column;
    }
`;
const LeftBottom = styled.div`
    margin-top: 15px;
`;
const Right = styled.div`
    width: 34%;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 1280px) {
        width: 32%;
    }
    @media all and (max-width: 1080px) {
        width: 100%;
    }
`;
const RightTop = styled.div``;
const RightBottom = styled.div`
    margin-top: 15px;
`;
// const Container =styled.div``;
// const Container =styled.div``;
// const Container =styled.div``;
