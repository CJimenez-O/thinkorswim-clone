import React from "react";
import styled from "styled-components";
import { BiDollarCircle } from "react-icons/bi";
import { FiInfo } from "react-icons/fi";
import { RiArrowUpDownFill, RiAddCircleFill } from "react-icons/ri";
import StockHeader from "./StockHeader";
import StockInfo from "./StockInfo";
import Chart from "./Chart";
import News from "./News";
import Portfolio from "./Portfolio";
import TrendingNews from "./TrendingNews";

function trade() {
	return (
		<Container>
			<div className="account-container grid-item">
				<div className="summary">
					<p className="summary-title">
						<span className="dollar-sign">
							<BiDollarCircle />
						</span>
						Account Summary
					</p>
				</div>
				<div className="account-value">
					<div className="account-type"> All Accounts </div>
					<div className="flex">
						<p className="cash-title">Account Value</p>
						<p>$100,000</p>
					</div>

					<div className="flex daily">
						<div className="cash">
							<p className="cash-title">Cash</p>
							<p className="cash-available">$100,000</p>
						</div>
						<div className="PL-Dollar">
							<p className="cash-title">P/L Day $</p>
							<p className="PL">$0</p>
						</div>
						<div className="PL-Percent">
							<p className="cash-title">P/L Day %</p>
							<p className="PL">0%</p>
						</div>
					</div>
					<div className="disclaimer">
						<p>
							<span className="sim-icon">
								<FiInfo />
							</span>
							These are simulated values.{" "}
						</p>
					</div>
				</div>
				<div className="watchlist">
					<div>
						<p className="watchlist-title">
							<span className="arrow-icon">
								<RiArrowUpDownFill />
							</span>
							Watchlists
						</p>
					</div>
					<div className="sub-title">
						<p className="position-title">Indices</p>
					</div>
					<div className="watchlist-table">
						<div>
							<ul className="wl-table-header">
								<li className="wl-symbol-title">Symbol</li>
								<li className="wl-symbol-info"> Mark </li>
								<li className="wl-symbol-info"> Chng %</li>
								<li className="wl-symbol-info"> Volume </li>
							</ul>
						</div>
						<div>
							<ul className="wl-symbol">
								<li className="wl-symbol-title">AAPL</li>
								<li className="wl-symbol-mark">130</li>
								<li className="wl-symbol-chng">0%</li>
								<li className="wl-symbol-vol">32,645,238</li>
							</ul>
							<ul className="wl-symbol gray">
								<li className="wl-symbol-title">AAPL</li>
								<li className="wl-symbol-mark">130</li>
								<li className="wl-symbol-chng">0%</li>
								<li className="wl-symbol-vol">32,645,238</li>
							</ul>
							<ul className="wl-symbol">
								<li className="wl-symbol-title">AAPL</li>
								<li className="wl-symbol-mark">130</li>
								<li className="wl-symbol-chng">0%</li>
								<li className="wl-symbol-vol">32,645,238</li>
							</ul>
						</div>
					</div>
					<div className="sub-title">
						<p className="position-title">Top Gainers</p>
					</div>
					<div className="watchlist-table">
						<div>
							<ul className="wl-table-header">
								<li className="wl-symbol-title">Symbol</li>
								<li className="wl-symbol-info"> Mark </li>
								<li className="wl-symbol-info"> Chng %</li>
								<li className="wl-symbol-info"> Volume </li>
							</ul>
						</div>
						<div>
							<ul className="wl-symbol">
								<li className="wl-symbol-title">AAPL</li>
								<li className="wl-symbol-mark">130</li>
								<li className="wl-symbol-chng">0%</li>
								<li className="wl-symbol-vol">32,645,238</li>
							</ul>
							<ul className="wl-symbol gray">
								<li className="wl-symbol-title">AAPL</li>
								<li className="wl-symbol-mark">130</li>
								<li className="wl-symbol-chng">0%</li>
								<li className="wl-symbol-vol">32,645,238</li>
							</ul>
							<ul className="wl-symbol">
								<li className="wl-symbol-title">AAPL</li>
								<li className="wl-symbol-mark">130</li>
								<li className="wl-symbol-chng">0%</li>
								<li className="wl-symbol-vol">32,645,238</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="stock-container grid-item">
				<StockHeader />
				<Chart />
				<StockInfo />
				<News />
			</div>
			<div className="portfolio-container grid-item">
				<Portfolio />
				<TrendingNews />
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: auto 50% auto;
	grid-column-gap: 20px;
	background-color: #1f1f1f;
	height: 92vh;
	overflow-y: hidden;
	.grid-item {
		border: 1px solid rgba(0, 0, 0, 0.8);
		padding: 20px;
		font-size: 30px;
		background-color: #000;
		color: white;
	}

	.summary {
		margin-bottom: 20px;
	}

	.dollar-sign {
		font-size: 23px;
		padding-right: 10px;
		position: relative;
		top: 4px;
	}

	.summary-title {
		font-size: 22px;
	}

	.account-type {
		margin: 10px 0px;
		background-color: #1f1f1f;
		font-size: 20px;
		padding: 5px 0;
		padding-left: 20px;
		border: 0.5px solid #fff;
		border-radius: 5px;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		padding: 5px 0;
	}
	.cash-title {
		color: #999;
	}

	.daily {
		margin-top: 5px;
	}

	.sim-icon {
		position: relative;
		top: 2px;
		margin-right: 5px;
	}

	.disclaimer {
		font-size: 16px;
		margin-top: 10px;
		padding: 7px 5px;
		background-color: #f6b333;
		border-radius: 5px;
		color: #000;
		text-align: center;
	}

	// watchlist style
	.arrow-icon {
		position: relative;
		top: 4px;
		margin-right: 5px;
	}
	.watchlist-title {
		font-size: 22px;
		margin: 10px 0;
		margin-top: 40px;
	}
	.create-new-wl {
		cursor: pointer;
		margin: 5px 0;
	}
	.sub-title {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
	}

	.position-title {
		padding: 5px 0;
	}
	.wl-icon {
		position: relative;
		top: 3px;
	}

	.wl-table-header {
		display: flex;
		justify-content: space-between;
		list-style: none;
		font-size: 14px;
		padding: 15px 15px;
		border-top: 1px solid gray;
		border-bottom: 1px solid gray;
	}

	.wl-symbol {
		display: flex;
		justify-content: space-between;
		list-style: none;
		font-size: 16px;
		padding: 5px 15px;
	}

	.gray {
		background-color: #1f1f1f;
	}

	.stock-container {
		overflow: auto;
	}
`;

export default trade;
