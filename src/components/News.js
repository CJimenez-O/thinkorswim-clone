import React from "react";
import styled from "styled-components";

function News() {
	return (
		<Container>
			<h4 className="news-section-title">AAPL News</h4>
			<ul className="news-list">
				<li className="stock-news-list-item">
					<div className="news-element">
						<p className="news-title">
							Social Buzz: Rocket Lab, Lululemon Rally on Earnings Reports as
							Most Wallstreetbets S...
						</p>
						<p className="news-title">2h</p>
					</div>
				</li>
				<li className="stock-news-list-item">
					<div className="news-element">
						<p className="news-title">
							Social Buzz: Rocket Lab, Lululemon Rally on Earnings Reports as
							Most Wallstreetbets S...
						</p>
						<p className="news-title">2h</p>
					</div>
				</li>
				<li className="stock-news-list-item">
					<div className="news-element">
						<p className="news-title">
							Social Buzz: Rocket Lab, Lululemon Rally on Earnings Reports as
							Most Wallstreetbets S...
						</p>
						<p className="news-title">2h</p>
					</div>
				</li>
				<li className="stock-news-list-item">
					<div className="news-element">
						<p className="news-title">
							Social Buzz: Rocket Lab, Lululemon Rally on Earnings Reports as
							Most Wallstreetbets S...
						</p>
						<p className="news-title">2h</p>
					</div>
				</li>
				<li className="stock-news-list-item">
					<div className="news-element">
						<p className="news-title">
							Social Buzz: Rocket Lab, Lululemon Rally on Earnings Reports as
							Most Wallstreetbets S...
						</p>
						<p className="news-title">2h</p>
					</div>
				</li>
			</ul>
		</Container>
	);
}
const Container = styled.div`
	margin-top: 20px;
	overflow: auto;
	.news-section-title {
		font-size: 20px;
	}
	.news-list {
		margin-top: 20px;
	}
	.stock-news-list-item {
		background-color: rgb(31, 31, 31);
		border-radius: 20px;
		margin: 20px 0;
		list-style: none;
	}
	.news-element {
		display: flex;
		justify-content: space-between;
		padding: 10px 20px;
	}
	.news-title {
		font-size: 13px;
	}
`;
export default News;
