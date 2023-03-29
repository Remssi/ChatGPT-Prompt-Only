import React from "react";

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: "#eee", padding: "1rem" }}>
      <h1 style={{ margin: 0 }}>My Q&A App</h1>
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
    </header>
  );
};

export default Header;
