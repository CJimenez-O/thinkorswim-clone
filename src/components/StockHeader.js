import React from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";


function StockHeader() {
    const tempPercent = '0.06(0.04%)'
  return (
    <Container>
      <div className="stock-symbol-title">
        <h4 className="symbol">AAPL</h4>
        <h4 className="stock-price">157.34 {tempPercent}</h4>
      </div>
      <div className="stock-symbol-info">
        <div className="stock-symbol-subtitle">
          <p className="stock-full-name">AAPL INC COM</p>
          <div className="stock-actions">
            <button className="watchlist-button">Add to Watchlist</button>
            <div className="create-alert">
              <p className="alert-bell">
                <FaBell />
              </p>
              <button className="alert-button">Create Alert</button>
            </div>
          </div>
        </div>
        <div className="stock-actions">
          <div className="sell-action">
            <div className="bid-info">
              <p className="bid-price">157.27</p>
              <p className="bid-size">Bid size: 1</p>
            </div>
            <div className="action-button">
              <button className="sell-stock-button">Sell</button>
            </div>
          </div>
          <div className="sell-action">
            <div className="bid-info">
              <p className="bid-price">157.27</p>
              <p className="bid-size">Bid size: 1</p>
            </div>
            <div className="action-button">
              <button className="buy-stock-button">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
.stock-symbol-title{
    display: flex;
    justify-content: space-between;
}
.symbol {
    font-size: 30px;
    font-weight: 400;
}
.stock-price{
    font-size: 26px;
    font-weight: 400;
    color: #40a829;
}
.stock-symbol-info{
    display: flex;
    justify-content: space-between;

}
.stock-full-name{
    font-size: 16px;
    font-weight: 400;
}
.watchlist-button{
    background-color: transparent;
    font-size: 16px;
    color: white;
    border:none;
    font-weight: 400;
    letter-spacing: .5px;
    padding-right: 10px;
    height: 18px;
    border-right: solid 2px #adadad;
    cursor: pointer;
}
.create-alert{
    display: flex;
    cursor: pointer;
}
.alert-bell{
    font-size: 15px;
}
.alert-button{
    background-color: transparent;
    font-size: 16px;
    color: white;
    border:none;
    font-weight: 400;
    letter-spacing: .5px;
    padding-right: 10px;
    margin-left: 5px;
    height: 15px;
    cursor: pointer;
}
.stock-actions{
    display: flex;
    gap: 20px;
    margin-top: 5px;
}
.sell-action{
    display: flex;
    gap: 10px;
    font-size: 12px;
}
.bid-info{
    margin-top: 5px;
}
.bid-price{
    text-align: right;
}
.sell-stock-button{
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    background-color: red;
}

.buy-stock-button{
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    background-color:  #40a829;
}

`;

export default StockHeader;
