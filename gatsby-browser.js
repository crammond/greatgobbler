import React from "react";
import "./src/components/layout.css";

import Header from "./src/components/header.js";

export const wrapPageElement = ({ element, props }) => (
	<Header {...props}>{element}</Header> 
);