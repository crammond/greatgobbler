import React from "react";
import { Link } from "gatsby";

import greatGobblerLogo from "../images/gobblerlogo.png";
import southLogo from "../images/panther_logo.png";
import northLogo from "../images/titan_logo.png";
import startingLinePic from "../images/gobbler_start_2016_crop3.jpg";

const items = [
    {key: '', name: 'Home'},
    {key: 'faq', name: 'FAQ'},
    {key: 'registration', name: 'Registration'},
    {key: 'course-information', name: 'Course Information'},
    {key: 'awards', name: 'Awards'},
    {key: 'volunteer', name: 'Volunteer'},
    {key: 'food-donations', name: 'Food Donations'},
    {key: 'sponsors', name: 'Sponsors'},
    {key: 'results', name: 'Results'},
];

const Header = ({ children, uri }) => (
    <>
    <header className="header bg--orange text-color--white">
        <div className="header-top">
            <img src={greatGobblerLogo} height="100px" width="auto" alt=""/>
            <h1 className="header-title">Great Gobbler 5k</h1>
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            <ul className="header-nav">
                {items.map(({ key, name }) => {
                    const to = `/${key}`;
                    return (
                        <li key={key} className="header-nav-item">
                            <Link className={`${to === uri ? " active" : ""}`} to={to}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
        <div className="header-bottom">
            <img src={southLogo} height="100px" width="auto" alt=""/>
            <h2>
                Virtual race will take place Thursday, November 26, 2020 through Sunday, December 6, 2020. There is no in person meeting this year.{/* @ Nashua High School South. Great Gobbler 5k @ 8:00 A.M., Little Gobbler (400m) @ 7:30 A.M.*/}
            </h2>
            <img src={northLogo} height="100px" width="auto" alt=""/>
        </div>
    </header>
    <img src={startingLinePic} height="auto" width="100%" alt=""/>
    {children}
    </>
);

export default Header;