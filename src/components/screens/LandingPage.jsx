import React, { useState } from "react";
import styled from "styled-components";
import Header from "../includes/Header";
import SideBar from "../includes/SideBar";
import Spotlight from "./Spotlight";
function LandingPage() {
    const [isOpen, setOpen] = useState(false);

    return (
        <MainContainer>
            <SideBar />
            <Section>
                <Header />

                <Container>
                    <Spotlight setOpen={setOpen} isOpen={isOpen} />
                </Container>
            </Section>
        </MainContainer>
    );
}

export default LandingPage;
const Section = styled.div`
    background-color: #f5f7fb;
    width: 100%;
    overflow-x: hidden;
`;

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const MainContainer = styled.div`
    display: flex;
`;
