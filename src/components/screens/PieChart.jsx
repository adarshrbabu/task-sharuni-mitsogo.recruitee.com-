import React from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

function PieChart() {
    const Disribution = [
        {
            name: "France",
            color: "#80E2FF",
            sales: "4260 Sales",
        },
        {
            name: "Italy",
            color: "#F49FA8",
            sales: "3970 Sales",
        },
        {
            name: "Japan",
            color: "#FFDF94",
            sales: "4260 Sales",
        },
        {
            name: "Canada",
            color: "#B5B3FB",
            sales: "3970 Sales",
        },
    ];
    const state = {
        chart: {
            type: "donut",
        },
        series: [4260, 3970, 4260, 3970],

        options: {
            fill: {
                colors: ["#80E2FF", "#F49FA8", "#FFDF94", "#B5B3FB"],
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,

                            total: {
                                show: true,
                                label: "Sales",
                            },
                            name: {
                                show: true,
                            },
                            value: {
                                show: true,
                            },
                        },
                    },
                },
            },
        },
    };

    return (
        <Continer>
            <Top>
                <span>Sales Distribution</span>
            </Top>
            <Bottom>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="donut"
                    height={200}
                />
            </Bottom>
            <hr />

            <Bottomdetails>
                {Disribution.map((val) => (
                    <div>
                        <span
                            style={{
                                background: val.color,
                            }}
                        ></span>
                        <p>{val.name}</p>
                        <small>{val.sales}</small>
                    </div>
                ))}
            </Bottomdetails>
        </Continer>
    );
}

export default PieChart;
const Continer = styled.div`
    background-color: #fff;
    width: 47%;
    padding: 10px;
    hr {
        border: 1px solid #f0f4f7;
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
    }
    @media all and (max-width: 1080px) {
        width: 100%;
    }
`;
const Top = styled.div`
    padding: 10px;
    span {
        display: inline-block;
        font-size: 14px;
    }
`;
const Bottom = styled.div`
    display: flex;
    justify-content: center;
`;
const Bottomdetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    small {
        display: inline-block;
        margin-left: 5px;
        color: #43425d;
        font-size: 13px;
        opacity: 50%;
    }
    span {
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 50%;
        display: inline-block;
        margin-right: 8px;
    }
    p {
        display: inline-block;
        margin-left: 5px;
        margin: 0;
        font-size: 13px;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }
`;
