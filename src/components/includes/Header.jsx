import React from "react";
import styled from "styled-components";
import { FcMenu } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Bar, Drop, dropuser } from "../redux/Slice";

function Header() {
    const { user, setUser, sidebar } = useSelector((state) => state.sample);

    const dispatch = useDispatch();

    const Dropdown = () => {
        if (user) {
            dispatch(Drop(false));
        } else {
            dispatch(Drop(true));
        }
    };
    const DropdownLidt = () => {
        if (setUser) {
            dispatch(dropuser(false));
        } else {
            dispatch(dropuser(true));
        }
    };

    return (
        <Div>
            <Head className={sidebar ? "border" : ""}>
                <Left>
                    <div>
                        <MenuIcon
                            onClick={() => {
                                sidebar
                                    ? dispatch(Bar(false))
                                    : dispatch(Bar(true));
                            }}
                        />
                    </div>
                    <Search />
                    <input
                        type="text"
                        placeholder="Search transactions, invoices or help"
                    />
                </Left>
                <Right>
                    <Searched />
                    <div>
                        <IoIosNotificationsOutline
                            style={{ width: "25px", height: "25px" }}
                        />
                        <Dott></Dott>
                    </div>

                    <User
                        onClick={() => {
                            Dropdown();
                        }}
                    >
                        <span>
                            John Doe{" "}
                            <MdKeyboardArrowDown
                                style={{
                                    width: "25px",
                                    height: "25px",
                                    color: "#4D4F5C",
                                }}
                            />
                        </span>
                    </User>
                    <Person onClick={() => DropdownLidt()}>
                        <img
                            src={require("../assets/images/profile-pic-01.jpg")}
                            alt="image"
                        />
                    </Person>
                </Right>
            </Head>
        </Div>
    );
}

export default Header;
const Head = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 6px #0000000a;
    align-items: center;
    padding: 5px 20px;
    &.border {
        border-top-left-radius: 20px;
    }
`;
const Left = styled.div`
    display: flex;
    width: 50%;
    input {
        border: none;
        outline: none;
        width: 50%;
        margin-left: 6px;
        @media all and (max-width: 480px) {
            display: none;
        }
    }
    div {
        cursor: pointer;
    }
`;

const Dott = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    background-color: #81e37a;
    position: absolute !important;
    top: 0;
    right: 0;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
        position: relative;
        display: inline-block;
        margin-right: 10px;
    }
`;

const Div = styled.div`
    background-color: #3c3b54;
`;

const User = styled.div`
    display: flex !important;
    align-items: center;
    cursor: pointer;

    span {
        opacity: 0.7;
        display: flex;
        align-items: center;

        @media all and (max-width: 480px) {
            display: none;
        }
    }
`;

const Person = styled.div`
    border-radius: 50%;
    width: 35px;
    cursor: pointer;
    img {
        width: 100%;
        display: block;
        border-radius: 50%;
    }
`;

const MenuIcon = styled(FcMenu)`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const Search = styled(IoIosSearch)`
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-top: 3px;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Searched = styled(IoIosSearch)`
    width: 25px;
    height: 25px;
    margin-right: 10px;

    display: none;
    @media all and (max-width: 480px) {
        display: block;
    }
`;
