import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";

function Portfolio() {
	return (
		<Container>
			<p className="account-title">
				<span className="portfolio-icon">
					<FaBriefcase />
				</span>
				All Account Positions
			</p>
			<div>
				<p className="positions-title">Positions</p>
				<ul className="list-titles">
					<li className="position-list-title">Stock</li>
					<li className="position-list-amount">Shares</li>
					<li className="position-list-profit">P/L</li>
					<li className="position-list-profit">Total Cost</li>
				</ul>
				<ul className="stock-portfolio">
					<li className="current-stock">AAPL</li>
					<li className="current-shares">125</li>
					<li className="current-stock-profit">$5</li>
					<li className="current-stock-profit">$50,534</li>
				</ul>
				<ul className="stock-portfolio gray">
					<li className="current-stock">AMC</li>
					<li className="current-shares">15</li>
					<li className="current-stock-profit">$1</li>
					<li className="current-stock-profit">$1,534</li>
				</ul>
				<ul className="stock-portfolio">
					<li className="current-stock">NVDA</li>
					<li className="current-shares">15</li>
					<li className="current-stock-profit">$187</li>
					<li className="current-stock-profit">$10,534</li>
				</ul>
				<ul className="totals-portfolio gray">
					<li className="current-stock">Totals</li>
					<li className="current-shares">155</li>
					<li className="current-stock-profit">$193</li>
					<li className="current-stock-profit">$62,534</li>
				</ul>
			</div>
		</Container>
	);
}

const Container = styled.div`
	.account-title {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 20px;
	}
	.portfolio-icon {
		position: relative;
		top: 2px;
		margin-right: 10px;
	}

	.positions-title {
		font-size: 20px;
		background-color: gray;
		padding: 5px 10px;
		background-color: rgb(31, 31, 31);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.list-titles {
		list-style: none;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		padding: 5px 10px;
		border-bottom: 1px solid rgb(31, 31, 31);
	}

	.stock-portfolio {
		list-style: none;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		padding: 5px 10px;
		overflow-x: auto;
	}

	.current-stock-profit {
		max-width: 50px;
		color: green;
	}

	.totals-portfolio {
		list-style: none;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		padding: 5px 10px;
		overflow-x: auto;
		border-top: 1px solid rgb(31, 31, 31);
		border-bottom: 1px solid rgb(31, 31, 31);
	}
`;

export default Portfolio;
