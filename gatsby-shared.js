import React from "react";
import "./src/components/layout.css";

import Header from "./src/components/header.js";

/*
Per https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

> Note: The APIs wrapPageElement and wrapRootElement exist in both the browser and Server-Side Rendering (SSR) APIs.
> You generally should implement the same components in both gatsby-ssr.js and gatsby-browser.js so that pages
> generated through SSR are the same after being hydrated in the browser.

The built app's hydration seems to dependent upon these being the same, as otherwise I was seeing the following
errors:

Hydration failed because the initial UI does not match what was rendered on the server.
https://legacy.reactjs.org/docs/error-decoder.html/?invariant=418


There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will
switch to client rendering.
https://legacy.reactjs.org/docs/error-decoder.html/?invariant=423
*/

export const wrapPageElement = ({ element, props }) => (
	<Header {...props}>{element}</Header> 
);