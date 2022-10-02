import React from "react";
import styled from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { MdForwardToInbox } from "react-icons/md";
import { MdOutlineListAlt } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
    const { sidebar } = useSelector((state) => state.sample);
    const dispatch = useDispatch();

    return (
        <Container className={sidebar ? "width" : ""}>
            <Top>
                <h3>ACME</h3>
            </Top>
            <Bottom>
                <List>
                    <RiHomeLine
                        style={{ color: "#A3A6B4", fontSize: "18px" }}
                    />

                    <p>Home</p>
                </List>
                <List className="color" s>
                    <CgList style={{ color: "#B5B3FB", fontSize: "18px" }} />

                    <p>Dashboard</p>
                </List>
                <List>
                    <MdForwardToInbox
                        style={{ color: "#A3A6B4", fontSize: "18px" }}
                    />

                    <p>Inbox</p>
                    {sidebar ? <span>new</span> : ""}
                </List>
                <List>
                    <MdOutlineListAlt
                        style={{ color: "#A3A6B4", fontSize: "18px" }}
                    />

                    <p>Products</p>
                </List>
                <List>
                    <FiSettings
                        style={{ color: "#A3A6B4", fontSize: "18px" }}
                    />

                    <p>Admin</p>
                </List>
            </Bottom>
        </Container>
    );
}

export default SideBar;
const Container = styled.div`
    width: 0%;
    background-color: #43425d;
    transition: 0.5s ease-in-out;
    visibility: hidden;

    &.width {
        visibility: visible;
        width: 17%;
        height: auto;
        @media all and (max-width: 1050px) {
            width: 25%;
        }
        @media all and (max-width: 812px) {
            width: 35%;
        }
        @media all and (max-width: 780px) {
            width: 45%;
        }
        @media all and (max-width: 480px) {
            min-width: 350px;
        }
        @media all and (max-width: 470px) {
            min-width: 250px;
        }
        @media all and (max-width: 360px) {
            min-width: 220px;
        }
    }
`;
const Top = styled.div`
    background: #3c3b54;
    opacity: 100%;
    padding: 10px;
    display: inline-block;
    width: 100%;
    z-index: 0;
    h3 {
        color: #fff;
        font-size: 17px;
        letter-spacing: 3px;
    }
`;

const Bottom = styled.div``;

const List = styled.div`
    padding: 15px 10px;
    margin-top: 7px;
    display: flex;
    cursor: pointer;
    position: relative;
    z-index: 0;
    p {
        margin-left: 10px;
        color: #ffffff;
    }
    span {
        background-color: red;
        display: inline-block;
        font-size: 12px;
        color: #fff;
        padding: 0px 6px;
        border-radius: 10px;
        position: absolute;
        right: 10%;
    }
    &.color {
        background: "#3C3B54";
    }
`;
