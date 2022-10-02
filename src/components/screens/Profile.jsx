import React from "react";
import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { BsLinkedin } from "react-icons/bs";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function Profile() {
    const users = [
        {
            name: "Drew James",
            image: require("../assets/images/profile-pic-03.jpg"),
            country: "United States",
            mobile: "Mobile : 8715674877",
        },
        {
            name: "Bavid Kames",
            image: require("../assets/images/profile-pic-02.jpg"),
            country: "United States",
            mobile: "Mobile : 8715674877",
        },
        {
            name: "Lavid Emes",
            image: require("../assets/images/profile-pic-04.jpg"),
            country: "United States",
            mobile: "Mobile : 8715674877",
        },
    ];
    return (
        <Continer>
            <Top>
                <TopProfile>
                    <ImgContainer>
                        <img
                            src={require("../assets/images/profile-pic-01.jpg")}
                            alt="image"
                        />
                    </ImgContainer>
                    <h3>Nick Herasimenka</h3>
                    <small>United States</small>
                </TopProfile>
                <TopBottom>
                    <TopIcons>
                        <BsTwitter
                            style={{
                                color: "#556575",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        />
                        <BsFacebook
                            style={{
                                color: "#556575",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        />

                        <BsLinkedin
                            style={{
                                color: "#556575",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        />

                        <AiOutlineWhatsApp
                            style={{
                                color: "#556575",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        />
                    </TopIcons>
                </TopBottom>
            </Top>
            <Bottom>
                <USerTop>
                    <span>Our Users</span>
                    <BsThreeDotsVertical
                        style={{
                            color: "#556575",
                            fontSize: "18px",
                            cursor: "pointer",
                        }}
                    />
                </USerTop>
                <UserBottom>
                    {users.map((item) => (
                        <User>
                            <Section>
                                <Img>
                                    <img src={item.image} alt="image" />
                                </Img>
                                <Div>
                                    <h4>{item.name}</h4>
                                    <Mobiles>
                                        <span>{item.country}</span>
                                        <span>{item.mobile}</span>
                                    </Mobiles>
                                </Div>
                            </Section>
                        </User>
                    ))}
                </UserBottom>
            </Bottom>
        </Continer>
    );
}

export default Profile;
const Continer = styled.div`
    width: 100%;

    background-color: #fff;
    color: #4d4f5c;
`;
const Top = styled.div`
    padding: 30px 20px 20px;
`;
const TopProfile = styled.div`
    h3 {
        text-align: center;
        font-size: 17px;
        color: #4d4f5c;
        margin-top: 10px;
    }
    small {
        text-align: center;
        display: block;
        margin-top: 10px;
    }
`;

const ImgContainer = styled.div`
    width: 90px;
    margin: 0 auto;
    img {
        width: 100%;
        display: block;
        border-radius: 50%;
    }
`;

const TopBottom = styled.div`
    border-bottom: 2px solid #f0f4f7;
`;

const Bottom = styled.div``;

const TopIcons = styled.div`
    width: 27%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const USerTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    margin-bottom: 15px;

    span {
        font-size: 15px;
    }
`;
const UserBottom = styled.div`
    padding: 0px 20px 20px;

    & :first-child {
        margin-top: 0;
    }
`;

const User = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
`;
const Img = styled.div`
    border-radius: 50%;
    width: 40px;

    img {
        width: 100%;
        display: block;
        border-radius: 50%;
    }
`;

const Mobiles = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    span {
        font-size: 14px;
        color: #43425d;
        opacity: 50%;
    }
`;
const Section = styled.div`
    display: flex;
    width: 100%;

    h4 {
        font-size: 14px;
    }
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    width: 100%;
`;
