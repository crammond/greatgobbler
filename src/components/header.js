import React from "react";
import { Link } from "gatsby";

const items = [
    {key: 'faq', name: 'FAQ'},
    {key: 'registration', name: 'Registration'},
    {key: 'course-information', name: 'Course Information'},
    {key: 'awards', name: 'Awards'},
    {key: 'volunteer', name: 'Volunteer'},
    {key: 'food-donations', name: 'Food Donations'},
    {key: 'sponsors', name: 'Sponsors'},
    {key: 'results', name: 'Results'},
];

const Header = () => (
    <div>
        <h1>Great Gobbler 5k</h1>
        <h2>Thursday, November 26, 2020 @ Nashua High School South. Great Gobbler 5k @ 8:00 A.M., Little Gobbler (400m) @ 7:30 A.M.</h2>
        <h2>A Nashua Community Thanksgiving Tradition</h2>
        <ul>
        {items.map(({ key, name }) => <li key={key}><Link to={`/${key}`}>{name}</Link></li>)}
        </ul>
    </div>
);

export default Header;