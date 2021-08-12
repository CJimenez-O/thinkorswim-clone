import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaBell, FaUserTie } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { IoHourglassOutline } from "react-icons/io5";
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
        <li className='live'>
          <div>
            <p className='connect'>
              <span className="greenDot">•</span> Connected
            </p>
            <p className="delay">Partially delayed data</p>
          </div>
        </li>
        <li>
          <div className="search">
           <p className='icon'>  <GrSearch style={{color: 'white'}} /> </p>
            <input className='search-input' placeholder='Find a Symbol' type="search-input"></input>
          </div>
        </li>
        <li className="open">
          <div>
            <IoHourglassOutline />
            <div>
              <p className="time">12:32:16</p>
              <p> until open </p>
            </div>
          </div>
        </li>
        <li>
          <p>
            <FaGraduationCap />
          </p>
          <p>Education</p>
        </li>
        <li>
          <p>
            <FaBell />
          </p>
          <p> Notifications </p>
        </li>
        <li>
          <p>
            <BiMessage />
          </p>
          <p> Feedback </p>
        </li>
        <li>
          <p>
            <BiMessageError />
          </p>
          <p> Support </p>
        </li>
        <li>
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
  li p {
    color: #999;
  }

  .header-elements{
      display: flex;
      justify-content: space-evenly;
  }

  .header-elements li{
    list-style: none;
  }

  .live{
      padding: 5px 20px
  }

  .greenDot{
      color: green;
  }
  .connect{
      margin-left: 15px;
      font-size: 12px;
      font-weight: bold;
  }
  .delay{
      font-size: 12px;
      font-weight: bold;
      color: #f0a033
  }

  // search symbol input box
  .search{  
      color: #999;
      border: 1px solid white;
      padding: 5px 10px;
      display: flex;
      gap: 10px;
      border-radius: 3px;
  }

  .icon{
      font-size: 20px;
  }
  .search-input{
    border: none;
    background: none;
    font-size: 16px;
  }

  // end of search input boc
`;

export default header;
