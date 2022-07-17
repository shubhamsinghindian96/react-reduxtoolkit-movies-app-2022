import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";
// ============================================================================

const PageNotFound = () => {
  return (
    <>
      <div className="footer-container">
        <h1 className="title">404 || Page Not Found</h1>
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
