import React from "react";
import PropTypes from "prop-types";

import Seo from "./seo";

const Layout = ({ children, title }) => (
    <>
		    <Seo title={title} />
        <main>{children}</main>
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;