import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import VideoModal from "../includes/Modal/VideoModal";

function ProductVideo({ setOpen, isOpen }) {
    const [isModal, setModal] = useState(false);
    return (
        <>
            <VideoModal isModal={isModal} setModal={setModal} />
            <Continer>
                <USerTop>
                    <span>Product Video</span>
                    <BsThreeDotsVertical
                        style={{
                            color: "#43425D",
                            fontSize: "18px",
                            cursor: "pointer",
                            display: "inline-block",
                        }}
                    />
                </USerTop>
                <VideoDiv>
                    <img
                        src={require("../assets/images/video thumbnail.png")}
                        alt="image"
                    />
                    <span onClick={() => setModal(true)}>
                        <Div>
                            <BsFillPlayFill
                                style={{
                                    color: "#556575",
                                    fontSize: "25px",
                                }}
                            />
                        </Div>
                    </span>
                </VideoDiv>
            </Continer>
        </>
    );
}

export default ProductVideo;
const Continer = styled.div`
    background-color: #fff;
    padding: 10px;
    display: none;
    @media all and (max-width: 1080px) {
        display: block;
    }
`;
const USerTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    span {
        font-size: 15px;
    }
`;
const VideoDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
    padding: 0px 10px;
    margin-top: 10px;

    span {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 1;
        z-index: 10;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 7px;
    }
`;
const Div = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
