import React from "react";
import styled from "styled-components";

function Users() {
    const users = [
        {
            name: "Bavid Kames",
            image: require("../assets/images/profile-pic-02.jpg"),
            tittle: "Assigned you on the call with Sara",
            Time: "2 min ago",
        },
        {
            name: "Alexa Marry",
            image: require("../assets/images/profile-pic-04.jpg"),
            tittle: "Marked the task New UI as done",
            Time: "5 min ago",
        },
        {
            name: "Eva Maria",
            image: require("../assets/images/profile-pic-05.jpg"),
            tittle: "Added a new comment on Sales task",
            Time: "10 min ago",
        },
    ];
    return (
        <>
            <Container>
                <Top>
                    {users.map((item) => (
                        <List>
                            <Section>
                                <Img>
                                    <img src={item.image} alt="image" />
                                </Img>
                            </Section>
                            <Div>
                                <Mobiles>
                                    <h4>{item.name} </h4>
                                    <span>{item.Time}</span>
                                </Mobiles>
                                <p>{item.tittle}</p>
                            </Div>
                        </List>
                    ))}
                </Top>
                <Bottom>
                    <p>Show More</p>
                </Bottom>
            </Container>
        </>
    );
}

export default Users;
const Container = styled.div`
    position: absolute;
    top: 1;
    right: 6%;
    z-index: 10;
    background-color: #fff;
    border-radius: 7px;
    width: 350px;
    box-shadow: 0px 0px 8px #5565751a;
`;
const Top = styled.div`
    padding: 20px;
    & :first-child {
        margin-top: 0;
    }
`;

const List = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
`;

const Section = styled.div`
    margin-right: 10px;
`;

const Img = styled.div`
    width: 50px;
    border-radius: 50%;
    img {
        width: 100%;
        display: block;
        border-radius: 50%;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    p {
        color: #43425d;
        opacity: 50%;
        font-size: 13px;
    }
`;

const Mobiles = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    h4 {
        color: #4d4f5c;
        font-size: 15px;
    }
    span {
        color: #43425d;
        opacity: 50%;
        font-size: 13px;
    }
`;
const Bottom = styled.div`
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #f0f4f7;
    p {
        color: #3b86ff;
        font-size: 13px;
    }
`;
