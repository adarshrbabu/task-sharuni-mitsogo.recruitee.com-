import React, { useState, useEffect, useRef, useContext } from "react";
import ReactPlayer from "react-player";

import styled from "styled-components";

function VideoModal({ isModal, setModal }) {
    const [value, setValue] = useState(false);
    function useOutsideClick(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setModal(false);
                    setValue(true);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);

    return (
        <MainContainer>
            {isModal ? (
                <Overlay
                    onClick={() => setModal(false)}
                    style={{ display: isModal ? "block" : "none" }}
                ></Overlay>
            ) : (
                ""
            )}
            <BackContainer style={{ transform: isModal && "scale(1,1)" }}>
                <Modal ref={wrapperRef}>
                    <Container>
                        {isModal ? (
                            <ReactPlayer
                                url="https://youtu.be/Oy6hk6Y7VHQ"
                                width="100%"
                                height="100%"
                                controls={true}
                            />
                        ) : (
                            ""
                        )}
                    </Container>
                </Modal>
            </BackContainer>
        </MainContainer>
    );
}

export default VideoModal;
const MainContainer = styled.div``;
const BackContainer = styled.div`
    position: fixed;
    transition: 0.3s;
    transform: scale(0, 0);
    width: 100%;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: 0px;
`;
const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0px;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    filter: blur(1px);
`;
const Modal = styled.div`
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    max-height: 100vh;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    z-index: 101;
    border: 1px solid #26272a;
    background: #fff;
    border-radius: 5px;
    overflow-y: hidden;
    box-shadow: 0px 3px 56px #00000048;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`;
