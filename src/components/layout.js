import React from "react";
import PropTypes from "prop-types";

import SEO from "./seo";

const Layout = ({ children, title }) => (
    <>
		    <SEO title={title} />
        <main>{children}</main>
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;