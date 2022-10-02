import React from "react";
import styled from "styled-components";

function Refferer() {
    const Lists = [
        {
            Lacation: "google.com",
            Views: "3746",
            Sales: "752",
            Conversion: "43%",
            Total: "$19,291",
        },
        {
            Lacation: "facebook.com",
            Views: "694",
            Sales: "694",
            Conversion: "43%",
            Total: "$19,291",
        },
        {
            Lacation: "twitter.com",
            Views: "3746",
            Sales: "752",
            Conversion: "43%",
            Total: "$19,291",
        },
        {
            Lacation: "Direct, email, IM",
            Views: "694",
            Sales: "694",
            Conversion: "43%",
            Total: "$19,291",
        },
        {
            Lacation: "linkedin.com",
            Views: "3746",
            Sales: "752",
            Conversion: "694%",
            Total: "$19,291",
        },
        {
            Lacation: "instagram.com",
            Views: "694",
            Sales: "694",
            Conversion: "43%",
            Total: "$19,291",
        },
    ];
    return (
        <Continer>
            <Top>
                <p>Referrer</p>
            </Top>
            <Bottom>
                <BottomTop>
                    <div>
                        <p>Location</p>
                    </div>
                    <div>
                        <p>Views</p>
                    </div>

                    <div>
                        <p>Sales</p>
                    </div>

                    <div>
                        <p>Conversion</p>
                    </div>

                    <div className="left">
                        <p>Total</p>
                    </div>
                </BottomTop>
                <BottomDown>
                    {Lists.map((item) => (
                        <List>
                            <div>
                                <p>{item.Lacation}</p>
                            </div>
                            <div>
                                <p>{item.Views}</p>
                            </div>

                            <div>
                                <p>{item.Sales}</p>
                            </div>

                            <div>
                                <p>{item.Conversion}</p>
                            </div>

                            <div className="left">
                                <p>{item.Total}</p>
                            </div>
                        </List>
                    ))}
                </BottomDown>
            </Bottom>
            <Div>
                <span>Show More</span>
            </Div>
        </Continer>
    );
}

export default Refferer;
const Continer = styled.div`
    background-color: #fff;

    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    span {
        color: #3b86ff;
        font-size: 13px;
    }
    @media all and (max-width: 780px) {
        overflow-x: scroll;
    }

    /* padding: 0px 20px; */
`;
const Div = styled.div`
    padding: 20px 20px;
    cursor: pointer;
`;
const Top = styled.div`
    padding: 20px 20px 0px 20px;
    margin-bottom: 10px;
    p {
        color: #4d4f5c;
        font-size: 16px;
        text-align: left;
    }
`;
const Bottom = styled.div`
    padding: 0px 20px 0px 20px;
    @media all and (max-width: 780px) {
        width: 780px;
    }
`;

const BottomTop = styled.div`
    display: flex;
    background-color: #f5f6fa;
    padding: 12px 20px;
    div {
        width: 22%;
        &.left {
            width: 10%;
        }
    }
    p {
        color: #a3a6b4;
        font-size: 13px;
        display: inline;
    }
    &.right {
        text-align: right;
    }
`;

const BottomDown = styled.div``;
const List = styled.div`
    padding: 12px 20px;
    display: flex;
    border-bottom: 2px solid #f5f6fa;

    div {
        width: 22%;
        &.left {
            width: 10%;
        }
    }
    p {
        color: #4d4f5c;
        font-size: 13px;
    }
`;
// const Continer = styled.div``;
// const Continer = styled.div``;
