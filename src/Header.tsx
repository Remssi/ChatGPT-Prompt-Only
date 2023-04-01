import React from "react";
// manual fix: add import
import "./Header.css";

// This is the Header component which displays the app title and navigation links
const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0B2447",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        marginBottom: 0,
      }}
    >
      <div className="Header-left">
        {/* This is the app title */}
        <h1 className="Header-title" style={{ margin: 0 }}>
          My Q&A App
        </h1>
      </div>

      <div className="Header-right">
        {/* These are the navigation links */}
        <nav>
          <ul style={{ listStyle: "none", display: "flex", margin: 0 }}>
            <li style={{ margin: "0 1rem" }}>
              <a href="/">Home</a>
            </li>
            <li style={{ margin: "0 1rem" }}>
              <a href="/ask">Ask a Question</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
