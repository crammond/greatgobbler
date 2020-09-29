import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import SEO from "./seo";

import "./layout.css"

const Layout = ({ children, title }) => (
    <>
		    <SEO title={title} />
        <Header />
        <main>{children}</main>
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;