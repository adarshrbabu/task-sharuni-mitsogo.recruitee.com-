import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import { MdKeyboardArrowDown } from "react-icons/md";

function LineGraph() {
    const series = [
        {
            name: "Product Sold",
            data: [90, 30, 120, 35, 60, 0],
        },
        {
            name: "Total views",
            data: [20, 60, 20, 90, 0, 52],
        },
    ];
    const options = {
        chart: {
            fontFamily: "Helvetica, Arial, sans-serif",
            toolbar: {
                show: false,
            },
        },
        theme: {
            mode: "light",
            palette: "palette1",
            monochrome: {
                enabled: false,
                color: "#255aee",
                shadeTo: "light",
                shadeIntensity: 0.65,
            },
        },
        markers: {
            size: 5,
            colors: "#fff",
            strokeColors: "#80E2FF",
            strokeWidth: 1,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            showNullDataPoints: true,
            hover: {
                size: undefined,
                sizeOffset: 3,
            },
        },
        dataLabels: {
            enabled: false,
        },

        stroke: {
            curve: "smooth",
        },
        colors: ["#B5B3FB", "#80E2FF"],
    };

    return (
        <Continer>
            <Top>
                <Left>
                    <span>Statistics</span>
                </Left>
                <Right>
                    <span>Last 6 months</span>{" "}
                    <MdKeyboardArrowDown
                        style={{
                            width: "25px",
                            height: "25px",
                            color: "#4D4F5C",
                        }}
                    />
                </Right>
            </Top>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height="100%"
            />
        </Continer>
    );
}

export default LineGraph;
const Continer = styled.div`
    background-color: #fff;
    width: 47%;
    padding: 10px;
    @media all and (max-width: 1080px) {
        width: 100%;
    }
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;
const Left = styled.div`
    span {
        display: inline-block;
        font-size: 14px;
    }
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-right: 10px;
        font-size: 14px;
        display: inline-block;
    }
`;
// const Continer = styled.div``;
// const Continer = styled.div``;
