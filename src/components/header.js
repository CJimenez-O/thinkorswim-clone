import React from "react";
import styled from "styled-components";
import {
	FaGraduationCap,
	FaHourglassHalf,
	FaBell,
	FaUserTie,
	FaSearch,
} from "react-icons/fa";
import { BiMessage, BiMessageError } from "react-icons/bi";

function header() {
	return (
		<Header>
			<ul className="header-elements">
				<li className="logo">
					<img
						src="https://trade.thinkorswim.com/static/media/thinkorswim_Logo_paperMoney_DARK.3061b89f.svg"
						alt="logo"
					/>
				</li>
				<li className="live">
					<div>
						<p className="connect">
							<span className="greenDot">•</span> Connected
						</p>
						<p className="delay">Partially delayed data</p>
					</div>
				</li>
				<li>
					<div className="search">
						<p className="icon">
							{" "}
							<FaSearch />{" "}
						</p>
						<input
							className="search-input"
							placeholder="Find a Symbol"
							type="search-input"
						></input>
					</div>
				</li>
			</ul>

			<ul className="header-elements">
				<li>
					<div className="open">
						<p className="hourglass">
							<FaHourglassHalf />
						</p>
						<div className="time-container">
							<p className="time">12:32:16</p>
							<p className="time"> until open </p>
						</div>
					</div>
				</li>
				<li className="link">
					<p>
						<FaGraduationCap />
					</p>
					<p>Education</p>
				</li>
				<li className="link">
					<p>
						<BiMessage />
					</p>
					<p> Feedback </p>
				</li>
				<li className="link">
					<p>
						<BiMessageError />
					</p>
					<p> Support </p>
				</li>
				<li className="link">
					<p>
						<FaUserTie />
					</p>
					<p> User </p>
				</li>
			</ul>
		</Header>
	);
}

const Header = styled.nav`
	background-color: #1f1f1f;
	padding: 10px 2%;
	display: flex;
	justify-content: space-between;
	li p {
		color: #999;
	}

	.header-elements {
		display: flex;
		justify-content: space-evenly;
	}

	.header-elements li {
		list-style: none;
		text-align: center;
	}

	.live {
		padding: 5px 20px;
	}

	.greenDot {
		color: green;
	}
	.connect {
		font-size: 12px;
		font-weight: bold;
	}
	.delay {
		font-size: 12px;
		font-weight: bold;
		color: #f0a033;
	}

	// search symbol input box
	.search {
		border: 1px solid white;
		padding: 5px 10px;
		display: flex;
		gap: 10px;
		border-radius: 3px;
	}

	.icon {
		font-size: 20px;
		color: #999;
	}
	.search-input {
		border: none;
		background: none;
		font-size: 16px;
		color: #999;
		font-size: 16px;
		text-transform: uppercase;
	}
	.search-input:focus {
		outline: none;
		border: none;
	}
	.search-input::placeholder {
		/* Recent browsers */
		text-transform: none;
	}

	// end of search input box

	.open {
		display: flex;
		gap: 10px;
		margin-top: 5px;
		margin-right: 10px;
	}

	.hourglass {
		font-size: 16px;
		margin-top: 8px;
		color: #f0a033;
	}
	.time-container {
		font-size: 12px;
	}
	.time {
		color: #f0a033;
	}

	.link {
		border-left: 1px solid black;
		padding: 0 10px;
		font-size: 14px;
		font-weight: bold;
	}
`;

export default header;
