import React from "react";
import styled from "styled-components";

function StockInfo() {
  return (
    <Container>
      <div className="grid">
        <div>
          <div className="grid-items gray">
            <p className="information-subject">Volume</p>
            <p className="information-result">170,420,123</p>
          </div>
          <div className="grid-items ">
            <p className="information-subject">Volume</p>
            <p className="information-result">170,420,123</p>
          </div>
          <div className="grid-items gray">
            <p className="information-subject">Volume</p>
            <p className="information-result">170,420,123</p>
          </div>
        </div>

        <div>
          <div className="grid-items gray">
            <p className="information-subject">Beta</p>
            <p className="information-result">170,420,123</p>
          </div>
          <div className="grid-items ">
            <p className="information-subject">IV</p>
            <p className="information-result">170,420,123</p>
          </div>
          <div className="grid-items gray">
            <p className="information-subject">HV</p>
            <p className="information-result">170,420,123</p>
          </div>
        </div>
      </div>

      <div className="grid">
      <div>
        <div className="grid-items gray">
          <p className="information-subject">Volume</p>
          <p className="information-result">170,420,123</p>
        </div>
        <div className="grid-items ">
          <p className="information-subject">Volume</p>
          <p className="information-result">170,420,123</p>
        </div>
        <div className="grid-items gray">
          <p className="information-subject">Volume</p>
          <p className="information-result">170,420,123</p>
        </div>
      </div>

      <div>
        <div className="grid-items gray">
          <p className="information-subject">Beta</p>
          <p className="information-result">170,420,123</p>
        </div>
        <div className="grid-items ">
          <p className="information-subject">IV</p>
          <p className="information-result">170,420,123</p>
        </div>
        <div className="grid-items gray">
          <p className="information-subject">HV</p>
          <p className="information-result">170,420,123</p>
        </div>
      </div>
    </div>

    </Container>
  );
}

const Container = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: auto auto;
  overflow: hidden;
  grid-column-gap: 20px;

  .grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
  }
  .grid-items {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 10px 10px;
  }
`;

export default StockInfo;
