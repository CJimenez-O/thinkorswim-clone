import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const data = {
	labels: ["1", "2", "3", "4", "5", "6"],
	datasets: [
		{
			data: [12, 19, 3, 5, 2, 3],
			fill: false,
			backgroundColor: "rgb(255, 99, 132)",
			borderColor: "rgba(255, 99, 132, 0.2)",
		},
	],
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

function chart() {
	return (
		<Container>
			<Line className="chart" data={data} options={options} />
		</Container>
	);
}

const Container = styled.div`
	margin-top: 30px;
	border: 1px solid gray;

	.chart {
		padding: 10px 10px;
	}
`;

export default chart;
