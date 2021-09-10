import React from "react";
import styled from "styled-components";
import { FaRegNewspaper } from "react-icons/fa";

function TrendingNews() {
	return (
		<Container>
			<p className="news-section-title">
				<span className="news-icon">
					<FaRegNewspaper />
				</span>
				Trending News
			</p>
			<ul className="news-section-titles">
				<li className="title-item">Title</li>
				<li className="title-item">Author</li>
			</ul>
			<ul className="market-news-items">
				<li className="market-news-item">
					<a
						href="https://finance.yahoo.com/video/why-williams-sonoma-ceo-calls-141113070.html"
						className="news-item-wrapper"
					>
						<p className="news-item-title">
							Why Williams-Sonoma CEO calls the labor...
						</p>
						<p className="news-item-author">Yahoo</p>
					</a>
				</li>
				<li className="market-news-item">
					<a
						href="https://finance.yahoo.com/video/why-williams-sonoma-ceo-calls-141113070.html"
						className="news-item-wrapper"
					>
						<p className="news-item-title">
							Why Williams-Sonoma CEO calls the labor...
						</p>
						<p className="news-item-author">Yahoo</p>
					</a>
				</li>
				<li className="market-news-item">
					<a
						href="https://finance.yahoo.com/video/why-williams-sonoma-ceo-calls-141113070.html"
						className="news-item-wrapper"
					>
						<p className="news-item-title">
							Why Williams-Sonoma CEO calls the labor...
						</p>
						<p className="news-item-author">Yahoo</p>
					</a>
				</li>
				<li className="market-news-item">
					<a
						href="https://finance.yahoo.com/video/why-williams-sonoma-ceo-calls-141113070.html"
						className="news-item-wrapper"
					>
						<p className="news-item-title">
							Why Williams-Sonoma CEO calls the labor...
						</p>
						<p className="news-item-author">Yahoo</p>
					</a>
				</li>
			</ul>
		</Container>
	);
}

const Container = styled.div`
	margin-top: 40px;

	.news-icon {
		position: relative;
		top: 3px;
		margin-right: 10px;
	}

	.news-section-title {
		font-size: 20px;
		font-weight: 600;
	}

	.news-section-titles {
		display: flex;
		list-style: none;
		font-size: 16px;
		justify-content: space-between;
		margin: 10px 0;
		padding: 10px 10px;
		border-top: 1px solid rgb(31, 31, 31);
		border-bottom: 1px solid rgb(31, 31, 31);
	}
	.market-news-items {
		list-style: none;
	}
	.news-item-wrapper {
		text-decoration: none;
		color: white;
		display: flex;
		font-size: 15px;
		justify-content: space-between;
		padding: 10px 10px;
		border-bottom: 1px solid rgb(31, 31, 31);
	}

	.news-item-title {
		width: 70%;
	}
	.news-item-author {
		display: grid;
		align-items: center;
	}
`;

export default TrendingNews;
