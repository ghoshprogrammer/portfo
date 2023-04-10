import React from "react";
// import EmailIcon from '@mui/icons-material';
// import PersonIcon from '@mui/icons-material';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./topbar.scss";
import "../../global.scss";

const Topbar = ({openMenus, setOpenMenu}) => {
  
  return (
    <div className={openMenus?'active topbar': 'topbar'}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+9172868821</span>
          </div>
          <div className="itemContainer">
            <AiOutlineMail className="icon" />
            <span>ghoshswarnendu147@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setOpenMenu((!openMenus))}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
