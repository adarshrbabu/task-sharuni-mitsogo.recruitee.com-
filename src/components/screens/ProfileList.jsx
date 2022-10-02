import React from "react";
import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { RiFileListLine } from "react-icons/ri";

import { BiExit } from "react-icons/bi";

function ProfileList() {
    return (
        <Container>
            <List>
                <BiUser style={{ color: "#4D4F5C", opacity: "70%" }} />{" "}
                <p>My Profile</p>
            </List>
            <List>
                <RiFileListLine style={{ color: "#4D4F5C", opacity: "70%" }} />{" "}
                <p>Billing</p>
            </List>
            <List>
                <BiExit style={{ color: "#4D4F5C", opacity: "70%" }} />{" "}
                <p>Logout</p>
            </List>
        </Container>
    );
}

export default ProfileList;
const Container = styled.div`
    width: 110px;
    box-shadow: 0px 0px 8px #5565751a;
    background-color: #fff;
    border-radius: 7px;
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px;
    z-index: 50;
    & :first-child {
        margin-top: 0;
    }
`;
const List = styled.div`
    display: flex;
    margin-top: 15px;
    cursor: pointer;
    p {
        margin-left: 10px;
        color: #43425d;
        font-size: 13px;
    }
`;
